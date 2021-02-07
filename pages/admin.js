import { useEffect, useState } from "react";

import { getAuthenticatedDynamoDbClient } from "../common/aws/DynamoDb";
import { fetchAllArticles } from "../common/aws/FetchArticles";
import { AMPLIFY_PARAMS } from "../common/aws/Params";
import { deserializedArticlesFromStorage } from "../common/article/Utils";
import AllArticles from "../components/admin/AllArticles";

// Without this configuration, withAuthenticator call below cannot work
// TODO What is Auth? A stateful singleton? What does Amplify.configure actually execute under the hood?
import Amplify, { Auth } from 'aws-amplify';
Amplify.configure(AMPLIFY_PARAMS);
Auth.configure();

const Admin = () => {
    // status can be either loading, failed, or completed.
    const [status, setStatus] = useState("loading");
    // articles is an array of arrays. Each inner array contains articles that belong to the same year.
    // The inner arrays are sorted by year in descending order.
    const [articles, setArticles] = useState({});

    let view;
    if (status === "failed") {
        view = (<p>Lỗi: không tải được dữ liệu từ kho</p>);
    } else if (status === "completed") {
        view = <AllArticles articles={articles} />
    } else {
        view = (<p>Đây là trang admin trống</p>);
    }

    useEffect(() => {
        if (status === "loading") {
            if (window.sessionStorage.getItem("AllArticles")) {
                // don't fetch from DB if the articles are discovered locally
                // use session storage so that a user can easily get the latest information
                // by closing the current tab and opening this page on a new tab
                console.log("Getting data from session storage ...");
                let articlesByYear = deserializedArticlesFromStorage();
                setStatus("completed");
                setArticles(articlesByYear);
            } else {
                // fetch from DB if the articles are not discovered locally
                Auth.currentAuthenticatedUser().then((cognitoUser) => {
                    const dynamoDbClient = getAuthenticatedDynamoDbClient(cognitoUser)
                    fetchAllArticles(dynamoDbClient, setStatus, setArticles)
                })
            }
        }
    }, [])

    return view
};

// Wrapping the Admin view with withAuthenticator guarantees that user has to login before content
// of Admin page is rendered.
import { withAuthenticator } from '@aws-amplify/ui-react';
export default withAuthenticator(Admin);