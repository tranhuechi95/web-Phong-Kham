import Link from 'next/link';

const EditArticle = ({article}) => {
    return (
        <div className="postSmView">
            <Link href={`/edit/${article.RouteName}?year=${article.CreatedDatetime.getFullYear()}`}>
                <h5>- {article.ArticleName}</h5>
            </Link>
            {/* <Link href={{ pathname: `/edit/${article.RouteName}`, query: { year: article.CreatedDatetime.getFullYear() }}}>
                <h4>{article.ArticleName}</h4>
            </Link> */}
            <small>{article.CreatedDatetime.toLocaleDateString('en-US', {timeZone: 'Asia/Bangkok'})}</small>
        </div>
    );
}

export default EditArticle;