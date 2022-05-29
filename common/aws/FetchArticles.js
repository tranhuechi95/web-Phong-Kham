import { fromDynamoDbSchema, cmpDescendingCreatedDatetime, groupByYear } from "../article/Utils";

export function fetchAllArticlesImpl(dynamoDbClient, lastEvaluatedKey, paginatedSchemas, setStatusCb, setArticlesCb) {
    const { ScanCommand } = require("@aws-sdk/client-dynamodb")
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
            // base case - error
            console.log(err);
            setStatusCb("failed");
        } else if (data.LastEvaluatedKey == null) {
            // base case - success
            console.log(`Fetched ${data.Items.length}, concatenating to paginated schemas ...`)
            paginatedSchemas = paginatedSchemas.concat(data.Items)
            console.log(`Paginated schemas now has length ${paginatedSchemas.length}`)
            let fetchedArticles = paginatedSchemas.map(fromDynamoDbSchema)
            fetchedArticles.sort(cmpDescendingCreatedDatetime)
            const articlesByYear = groupByYear(fetchedArticles)
            const articlesByYearStr = JSON.stringify(articlesByYear)
            window.sessionStorage.setItem("AllArticles", articlesByYearStr)
            setStatusCb("completed")
            setArticlesCb(articlesByYear)
        } else {
            // recursive case
            console.log(`Fetched ${data.Items.length}, concatenating to paginated schemas ...`)
            paginatedSchemas = paginatedSchemas.concat(data.Items)
            console.log(`Paginated schemas now has length ${paginatedSchemas.length}`)
            fetchAllArticlesImpl(dynamoDbClient, data.LastEvaluatedKey, paginatedSchemas, setStatusCb, setArticlesCb)
        }
    });
}

/**
 *
 * @param {*} dynamoDbClient A (possibly unauthenticated) DynamoDB instance
 * @param {*} setStatusCb A React state hook. Invoked with "completed" when all articles are successfully
 * scanned from DynamoDB, binned into years with each bin sorted in descending order by create timestamp,
 * and the serialization of that "map" is stored in the browser's session storage. Invoked with "failed"
 * if fetching from the DB returns an error.
 * @param {*} setArticlesCb A React state hook. If all articles are successfully scanned from DynamoDB,
 * binned into years with each bin sorted in descending order by create timestamp (creating a "map"),
 * and the serialization of that "map" is stored in the browser's session storage, this hook is invoked
 * with that "map". Not invoked if fetching from the DB returns an error.
 */
export function fetchAllArticles(dynamoDbClient, setStatusCb, setArticlesCb) {
    let paginatedSchemas = [];
    fetchAllArticlesImpl(dynamoDbClient, null, paginatedSchemas, setStatusCb, setArticlesCb)
}

/**
 * Fetch all articles with value of Category field equals to topicRouteName.
 * Store these articles to the browser's session storage.
 * @param {*} topicRouteName e.g. tong-hop, or viem-nhiem
 * @param {*} dynamoDbClient A (possibly unauthenticated) DynamoDB instance
 * @param {*} setStatusCb A React state hook.
 * Invoked with "completed" if database query returns valid results and articles stored
 * to browser's session storage.
 * Invoked with "failed" otherwise.
 * @param {*} setArticlesCb Invoked with the articles return from database query if the
 * query returns valid results (i.e. "completed"). Not invoked otherwise.
 */
export function fetchByTopic(topicRouteName, dynamoDbClient, setStatusCb, setArticlesCb) {
    const { QueryCommand } = require("@aws-sdk/client-dynamodb")
    dynamoDbClient.send(new QueryCommand({
        TableName: "BacSiDaoArticles",
        KeyConditionExpression: "Category = :category",
        ExpressionAttributeValues: { ":category": { "S" : topicRouteName } },
        ScanIndexForward: false, // returned entries are sorted by sort key (CreatedTimestamp) in descending order
    }), (err, data) => {
        if (err) {
            console.log(err);
            setStatusCb("failed");
        } else {
            const articles = data.Items.map(fromDynamoDbSchema);
            window.sessionStorage.setItem(topicRouteName, JSON.stringify(articles));
            setStatusCb("completed");
            setArticlesCb(articles);
        }
    });
}