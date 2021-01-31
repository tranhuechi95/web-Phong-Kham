import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import EditArticle from "../components/EditArticle";

// Without this configuration, withAuthenticator call below cannot work
// TODO What is Auth? A stateful singleton? What does Amplify.configure actually execute under the hood?
import Amplify, { Auth } from 'aws-amplify';
Amplify.configure({
    Auth: {
        region: 'ap-southeast-1',
        userPoolId: 'ap-southeast-1_njLRxln6g',
        userPoolWebClientId: '6525vahirp3ojc70ltj0pi7u26',
        // enforce user authentication prior to accessing AWS resources
        mandatorySignIn: true,
    }
});
Auth.configure();

const Admin = () => {
    // status can be either loading, failed, or completed.
    const [status, setStatus] = useState("loading");
    // articles is an array of arrays. Each inner array contains articles that belong to the same year.
    // The inner arrays are sorted by year in descending order.
    const [articles, setArticles] = useState({});

    let view = (
        <p>Đây là trang admin trống</p>
    );
    if (status === "failed") {
        view = (
            <p>Lỗi: không tải được dữ liệu từ kho</p>
        );
    } else if (status === "completed") {
        let multiYearsArticlesViews = [];
        let yearsDescending = Object.keys(articles).map(yearStr => parseInt(yearStr, 10));
        yearsDescending.reverse();
        for (let year of yearsDescending) {
            const singleYearArticles = articles[year];
            multiYearsArticlesViews.push((
                <div key={year} className="card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link colorDarkBlue" type="button" data-toggle="collapse" data-target={`#collapse${year}`} aria-expanded="true" aria-controls={`collapse${year}`}>
                                {year}
                            </button>
                        </h5>
                    </div>

                    <div id={`collapse${year}`} className="collapse" aria-labelledby={`heading${year}`} data-parent="#accordionExample">
                        <div className="card-body editPostGroupContainer">
                            {
                                singleYearArticles.map((article, idx) => (
                                    <EditArticle key={idx} article={article} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            ));
        }
        view = (
            <Layout title={"Chỉnh sửa bài viết"}>
                <section className="editPostsContainer">
                    <div className="accordion" id="accordionExample">
                        { multiYearsArticlesViews }
                    </div>
                </section>
            </Layout>
        )
    }

    let paginatedSchemas = [];

    useEffect(() => {
        if (status === "loading") {
            if (window.sessionStorage.getItem("AllArticles")) {
                // don't fetch from DB if the articles are discovered locally
                // use session storage so that a user can easily get the latest information
                // by closing the current tab and opening this page on a new tab
                console.log("Getting data from session storage ...");
                let articlesByYear = JSON.parse(window.sessionStorage.getItem("AllArticles"));
                let years = Object.keys(articlesByYear).map(yearStr => parseInt(yearStr, 10));
                for (let year of years) {
                    articlesByYear[year] = articlesByYear[year].map(article => {
                        let articleCopy = Object.assign({}, article);
                        articleCopy.CreatedDatetime = new Date(article.CreatedTimestamp * 1000);
                        return articleCopy;
                    });
                }
                setStatus("completed");
                setArticles(articlesByYear);
            } else {
                // fetch from DB if the articles are not discovered locally
                Auth.currentAuthenticatedUser().then((cognitoUser) => {
                    const { CognitoIdentityClient } = require("@aws-sdk/client-cognito-identity");
                    const {
                        fromCognitoIdentityPool,
                    } = require("@aws-sdk/credential-provider-cognito-identity");
                    const { DynamoDB, ScanCommand } = require("@aws-sdk/client-dynamodb");

                    const REGION = "ap-southeast-1";
                    const IDENTITY_POOL_ID = "ap-southeast-1:fcf7590e-f838-4b74-b2b8-6e69e0fc1f84";

                    const dynamoDbClient = new DynamoDB({
                        region: REGION,
                        credentials: fromCognitoIdentityPool({
                            client: new CognitoIdentityClient({ region: REGION }),
                            identityPoolId: IDENTITY_POOL_ID,
                            // If logins is not provided, dynamodb would complain that an unauthorized user
                            // is trying to access AWS DynamoDB service. This will lead to an error as it is
                            // defined in the identity pool we're using that unauthorized user has no access
                            // to DynamoDB services, while authorized user has full access to DynamoDB services.
                            logins: {
                                // name of Amazon Cognito identity provider has the following structure
                                // cognito-idp.<REGION>.amazonaws.com/<USER_POOL_ID>
                                "cognito-idp.ap-southeast-1.amazonaws.com/ap-southeast-1_njLRxln6g":
                                    // TODO not sure why, but id token needs to be used here instead of access token
                                    cognitoUser.getSignInUserSession().getIdToken().getJwtToken()
                            },
                        }),
                    });

                    // TODO: refactor and use this in [topic].js and [article].js too
                    function fetchAllArticles(lastEvaluatedKey) {
                        let scanCommand;
                        if (lastEvaluatedKey == null) {
                            scanCommand = new ScanCommand({
                                TableName: "BacSiDaoArticles",
                            });
                        } else {
                            scanCommand = new ScanCommand({
                                TableName: "BacSiDaoArticles",
                                ExclusiveStartKey: lastEvaluatedKey,
                            });
                        }
                        dynamoDbClient.send(scanCommand, (err, data) => {
                            if (err) {
                                console.log(err);
                                setStatus("failed");
                            } else if (data.LastEvaluatedKey != null) {
                                // push result into some temporary place first
                                // but I might need this temporary var live beyond this scope
                                console.log(`Fetched ${data.Items.length}, concatenating to paginated schemas ...`);
                                paginatedSchemas = paginatedSchemas.concat(data.Items);
                                console.log(`Paginated schemas now has length ${paginatedSchemas.length}`);
                                fetchAllArticles(data.LastEvaluatedKey);
                            } else {
                                console.log(`Fetched ${data.Items.length}, concatenating to paginated schemas ...`);
                                paginatedSchemas = paginatedSchemas.concat(data.Items);
                                console.log(`Paginated schemas now has length ${paginatedSchemas.length}`);
                                let fetchedArticles = paginatedSchemas.map(schema => {
                                    return {
                                        CreatedTimestamp: schema.CreatedTimestamp.N,
                                        CreatedDatetime: new Date(schema.CreatedTimestamp.N * 1000),
                                        ArticleName: schema.ArticleName.S,
                                        RouteName: schema.ArticleName.S.toLowerCase().split(' ').join('-'),
                                        HeadlineImage: schema.HeadlineImage.S,
                                        Topic: schema.Category.S,
                                        Excerpt: schema.Excerpt.S,
                                        Content: schema.Content.S,
                                    };
                                });
                                fetchedArticles.sort((a, b) => {
                                    if (a.CreatedDatetime < b.CreatedDatetime) {
                                        return 1; // return 1 instead of -1 here because we want to sort descending
                                    } else if (a.CreatedDatetime > b.CreatedDatetime) {
                                        return -1; // return -1 instead of 1 here because we want to sort descending
                                    } else {
                                        return 0;
                                    }
                                });
                                let articlesByYear = {};
                                let currYear = 0;
                                for (let i = 0; i < fetchedArticles.length; ++i) {
                                    if (!currYear || fetchedArticles[i].CreatedDatetime.getFullYear() < currYear) {
                                        currYear = fetchedArticles[i].CreatedDatetime.getFullYear();
                                        articlesByYear[currYear] = []
                                    }
                                    articlesByYear[currYear].push(fetchedArticles[i]);
                                }
                                const articlesByYearStr = JSON.stringify(articlesByYear);
                                window.sessionStorage.setItem("AllArticles", articlesByYearStr);
                                setStatus("completed");
                                setArticles(articlesByYear);
                            }
                        });
                    }

                    fetchAllArticles(null);
                });
            }
        }
    }, [])

    return view
};

// Wrapping the Admin view with withAuthenticator guarantees that user has to login before content
// of Admin page is rendered.
import { withAuthenticator } from '@aws-amplify/ui-react';
export default withAuthenticator(Admin);