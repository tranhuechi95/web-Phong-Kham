import topics from '../../static/TopicsDefinition.json'
import Link from 'next/link'

export default function OtherTopicsSidePanel({topicRouteName}) {
    // filter from topics to get all the routeName that is not the same as our current article's routeName
    const otherTopics = topics.filter(topic => topic.routeName !== topicRouteName);
    return (
        <div>
            <h3 className="fontSize1-5vw fontSansation pt-1 text-center">CÁC CHỦ ĐỀ BÀI VIẾT KHÁC</h3>
            {
                otherTopics.map((topic, idx) => (
                    <div className="pt-1" key={idx}>
                        <Link href="/topics/[topic]" as={`/topics/${topic.routeName}`}>
                            <a>
                                <div>
                                    <img className="img-fluid otherTopics-img-container" src={`../../static/assets/template/images/${topic.smImage}`}/>
                                </div>
                                <h5 className="colorBlue fontSize1-3vw fontRoboBold text-center">{topic.displayName}</h5>
                            </a>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}