export const REGION = "ap-southeast-1"
export const IDENTITY_POOL_ID = "ap-southeast-1:fcf7590e-f838-4b74-b2b8-6e69e0fc1f84"
// name of Amazon Cognito identity provider has the following structure
// cognito-idp.<REGION>.amazonaws.com/<USER_POOL_ID>
export const COGNITO_IDENTITY_PROVIDER = "cognito-idp.ap-southeast-1.amazonaws.com/ap-southeast-1_njLRxln6g"
export const USER_POOL_ID = 'ap-southeast-1_njLRxln6g'
export const USER_POOL_WEB_CLIENT_ID = '6525vahirp3ojc70ltj0pi7u26'
export const AMPLIFY_PARAMS = {
    Auth: {
        region: 'ap-southeast-1',
        userPoolId: 'ap-southeast-1_njLRxln6g',
        userPoolWebClientId: '6525vahirp3ojc70ltj0pi7u26',
        // enforce user authentication prior to accessing AWS resources
        mandatorySignIn: true,
    }
}