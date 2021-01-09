import { useState } from "react";
import Layout from "../components/Layout";

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
    const [articleAndStatus, setArticleAndStatus] = useState({status: "loading", article: {}});
    let view = (
        <p>Đây là trang admin trống</p>
    );
    if (articleAndStatus.status === "loading") {
        Auth.currentAuthenticatedUser().then((cognitoUser) => {
            const { CognitoIdentityClient } = require("@aws-sdk/client-cognito-identity");
            const {
                fromCognitoIdentityPool,
            } = require("@aws-sdk/credential-provider-cognito-identity");
            const { DynamoDB, GetItemCommand } = require("@aws-sdk/client-dynamodb");

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
            dynamoDbClient.send(new GetItemCommand({
                TableName: "BacSiDaoArticles",
                Key: {
                    "Category": {"S": "tong-hop"},
                    "CreatedTimestamp": {"N": "1585358536"},
                },
            }), (err, data) => {
                if (err) {
                    console.log(err);
                    setArticleAndStatus({
                        status: "failed",
                        article: {}
                    });
                } else {
                    setArticleAndStatus({
                        status: "completed",
                        article: data.Item
                    });
                }
            });
        });
    } else if (articleAndStatus.status === "failed") {
        view = (
            <p>Lỗi: không tải được dữ liệu từ kho</p>
        );
    } else {
        const article = articleAndStatus.article;
        const articleDate = new Date(article.CreatedTimestamp.N * 1000);
        const articleDateStr = articleDate.toLocaleString('en-US', {timeZone: 'Asia/Bangkok'});
        view = (
            <article>
                <h1>{article.ArticleName.S}</h1>
                <h4>Đăng lúc {articleDateStr}</h4>
                <h3>Vắn tắt</h3>
                <p>{article.Excerpt.S}</p>
                <h3>Nội dung</h3>
                <p>{article.Content.S}</p>
            </article>
        );
    }
    
    return (
        <Layout title="Admin">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    { view }
                </div>
                <div className="col-md-1"></div>
            </div>
        </Layout>
    )
};

// Wrapping the Admin view with withAuthenticator guarantees that user has to login before content
// of Admin page is rendered.
import { withAuthenticator } from '@aws-amplify/ui-react';
export default withAuthenticator(Admin);