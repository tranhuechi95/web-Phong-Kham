import Layout from "../components/Layout"
import postContent from '../static/normalized_data.json'
import Link from 'next/link'
import EditPostItem from '../components/editPostSmView'

const mainEdit = () => {
    const toshow = [
        [{title: "Bai viet so 1", date: "1/1/2020"},{title: "Bai viet so 2", date: "2/1/2020"},{title: "Bai viet so 3", date: "3/1/2020"},{title: "Bai viet so 4", date: "4/1/2020"},{title: "Bai viet so 5", date: "5/1/2020"}],
        [{title: "Bai viet so 6", date: "1/11/2019"},{title: "Bai viet so 7", date: "4/11/2019"},{title: "Bai viet so 8", date: "6/11/2019"},{title: "Bai viet so 9", date: "10/11/2019"},{title: "Bai viet so 10", date: "15/11/2019"}]
    ];

    return (
        <Layout title={"Chỉnh sửa bài viết"}>
            <section className="editPostsContainer">
                <div className="accordion" id="accordionExample">
                    {toshow.map((array, index) => (
                        <div className="card">
                            <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link colorDarkBlue" type="button" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                {`${2020 - index}`}
                                </button>
                            </h5>
                            </div>

                            <div id={`collapse${index}`} className="collapse" aria-labelledby={`heading${index}`} data-parent="#accordionExample">
                            <div className="card-body editPostGroupContainer">
                                {array.map((item, index2) => (
                                    <EditPostItem key={index2} content={item} />
                                ))}
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export default mainEdit;