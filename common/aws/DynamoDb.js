import { REGION, IDENTITY_POOL_ID } from './Params'

export function getAuthenticatedDynamoDbClient(cognitoUser) {
    const { CognitoIdentityClient } = require("@aws-sdk/client-cognito-identity")
    const { fromCognitoIdentityPool } = require("@aws-sdk/credential-provider-cognito-identity")
    const { DynamoDB } = require("@aws-sdk/client-dynamodb")

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
    })
    return dynamoDbClient
}

export function getUnauthenticatedDynamoDbClient() {
    const { CognitoIdentityClient } = require("@aws-sdk/client-cognito-identity")
    const { fromCognitoIdentityPool } = require("@aws-sdk/credential-provider-cognito-identity")
    const { DynamoDB } = require("@aws-sdk/client-dynamodb")
    const dynamoDbClient = new DynamoDB({
        region: REGION,
        credentials: fromCognitoIdentityPool({
            client: new CognitoIdentityClient({ region: REGION }),
            identityPoolId: IDENTITY_POOL_ID,
        }),
    })
    return dynamoDbClient
}