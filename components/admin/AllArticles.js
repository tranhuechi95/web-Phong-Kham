import Layout from "../Layout";
import EditArticle from "./EditArticle";

export default function AllArticles({articles}) {
    let multiYearsArticlesViews = []
    let yearsDescending = Object.keys(articles).map(yearStr => parseInt(yearStr, 10))
    yearsDescending.reverse()
    for (let year of yearsDescending) {
        const singleYearArticles = articles[year]
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
        ))
    }
    return (
        <Layout title={"Chỉnh sửa bài viết"}>
            <section className="editPostsContainer">
                <div className="accordion" id="accordionExample">
                    { multiYearsArticlesViews }
                </div>
            </section>
        </Layout>
    )
}