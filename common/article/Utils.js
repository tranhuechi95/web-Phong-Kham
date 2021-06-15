// TODO define a type Article here for a local in-process representation of an article?
// TODO define a type Topic here for a local in-process representation of a topic?

export function cmpDescendingCreatedDatetime(a, b) {
    if (a.CreatedDatetime < b.CreatedDatetime) {
        return 1; // return 1 instead of -1 here because we want to sort descending
    } else if (a.CreatedDatetime > b.CreatedDatetime) {
        return -1; // return -1 instead of 1 here because we want to sort descending
    } else {
        return 0;
    }
}

/**
 * Articles fetched from DynamoDB come in 1 flat array.
 * We want to group them by the year in which they were created to make it easy for the admin
 * to view them in the AdminView.
 * @param {*} fetchedArticles Array of (JS type, not DynamoDB schema) Article.
 */
export function groupByYear(fetchedArticles) {
    let articlesByYear = {};
    let currYear = 0;
    for (let i = 0; i < fetchedArticles.length; ++i) {
        if (!currYear || fetchedArticles[i].CreatedDatetime.getFullYear() < currYear) {
            currYear = fetchedArticles[i].CreatedDatetime.getFullYear();
            articlesByYear[currYear] = []
        }
        articlesByYear[currYear].push(fetchedArticles[i]);
    }
    return articlesByYear
}

/**
 * Given the content string that represents the full content of an article, generate an excerpt of that
 * article.
 * @param {*} content A string that represents the full content of an article
 */
export function getExcerpt(content) {
    return content.slice(0, 170) + "..."
}

export function epochToDatetime(epoch) {
    return new Date(epoch * 1000);
}

export function epochToDatetimeString(epoch) {
    return epochToDatetime(epoch).toLocaleString('en-US', {timeZone: 'Asia/Bangkok'});
}

export function deserializedArticlesFromStorage() {
    let articlesByYear = JSON.parse(window.sessionStorage.getItem("AllArticles"))
    let years = Object.keys(articlesByYear).map(yearStr => parseInt(yearStr, 10))
    // TODO all this painful work is because Javascript's native Datetime module
    // does not have a way to turn an ISO-formatted datetime string into a
    // Datetime instance. Consider using an external library.
    for (let year of years) {
        articlesByYear[year].forEach((elem, idx, arr) => {
            arr[idx].CreatedDatetime = new Date(elem.CreatedTimestamp * 1000)
        })
    }
    return articlesByYear
}

export function toDynamoDBSchema(article) {
    return {
        "CreatedTimestamp": {"N": Math.floor(article.CreatedDatetime.valueOf() / 1000).toString()},
        "ArticleName": {"S": article.ArticleName},
        "HeadlineImage": {"S": article.HeadlineImage},
        "Category": {"S": article.Topic},
        "Excerpt": {"S": getExcerpt(article.Content)}, // TODO deprecate usage of this
        "Content": {"S": article.Content},
    };
}

export function fromDynamoDbSchema(schema) {
    return {
        CreatedTimestamp: schema.CreatedTimestamp.N,
        CreatedDatetime: epochToDatetime(schema.CreatedTimestamp.N),
        ArticleName: schema.ArticleName.S,
        // To form route name, article name is splited by spaces and joined with - to make the encoded url more
        // readable since the article names this application deals with contain a lot of space characters.
        //
        // Remark: encodeURIComponent does not encode ' character. Some web applications might suffer an injection
        // bug because of this e.g. some that use query strings to create HTML attributes such as href='MyQueryParam'.
        // For these applications, ' can be further encoded as %27. Since this web application only uses the query param
        // to query a matching article instance, this extra layer of encoding is not needed.
        RouteName: encodeURIComponent(schema.ArticleName.S.toLowerCase().split(' ').join('-')),
        HeadlineImage: schema.HeadlineImage.S,
        Topic: schema.Category.S,
        Excerpt: schema.Excerpt.S,
        Content: schema.Content.S,
    }
}

/**
 * Modify an existing entry of allArticlesByYear which has the same CreatedDatetime as updatedArticle
 * with the content of updatedArticle.
 * @param {*} allArticlesByYear
 * @param {*} updatedArticle
 */
export function updateExistingArticle(allArticlesByYear, updatedArticle) {
    const year = updatedArticle.CreatedDatetime.getFullYear()
    let singleYearArticles = allArticlesByYear[year]
    let foundMatching = false
    for (let i = 0; i < singleYearArticles.length; ++i) {
        if (singleYearArticles[i].CreatedTimestamp === updatedArticle.CreatedTimestamp) {
            singleYearArticles[i] = updatedArticle
            foundMatching = true
            break
        }
    }
    if (!foundMatching) {
        console.log(`ERR | [Update existing] No existing article has matching CreatedDatetime with updated article [${updatedArticle.CreatedDatetime}]`);
    }
}


/**
 * Add newArticle as a new entry to allArticlesByYear
 * @param {*} allArticlesByYear
 * @param {*} newArticle
 */
export function addNewArticle(allArticlesByYear, newArticle) {
    const year = newArticle.CreatedDatetime.getFullYear()
    if (allArticlesByYear.hasOwnProperty(year)) {
        let singleYearArticles = allArticlesByYear[year]
        singleYearArticles.unshift(newArticle)
    } else {
        allArticlesByYear[year] = [newArticle]
    }
}