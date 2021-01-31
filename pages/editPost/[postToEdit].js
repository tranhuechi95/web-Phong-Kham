import React, { useState } from 'react';
import Layout from '../../components/Layout'
import Topics from '../../static/topic.json'
import Link from 'next/link'

const postToEdit = ({title}) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newTopic, setNewTopic] = useState("Initial Topic");
    const [imgUrl, setImgUrl] = useState("www.test.com");
    const [newContent, setNewContent] = useState();
    const [fullArticle, setFullArticle] = useState(); // here it should be the article fetch from DB as initial state

    const titleChangeHandler = (e) => {
        setNewTitle(e.target.value);
    }

    const topicChangeHandler = (e) => {
        setNewTopic(e.target.value);
    }

    const imgUrlChangeHandler = (e) => {
        setImgUrl(e.target.value);
    }

    const contentChangeHandler = (e) => {
        setNewContent(e.target.value);
    }

    //testing for form content
    const submitHandler = (e) => {
        e.preventDefault();
        let newArticle = {};
        newArticle.CreatedTimestamp = "2020-01-31"; // set to be the time of updated/created
        newArticle.ArticleName = newTitle;
        newArticle.HeadlineImage = imgUrl;
        newArticle.Topic = newTopic;
        newArticle.Content = newContent;
        setFullArticle(newArticle);
        console.log(newArticle);

        // need to push POST logic here to push to DB
    }
    return (
        <Layout>
            <Link href="/mainEdit" as={`/mainEdit`}>
                <h5 className="mainEditLink colorDarkBlue">Quay về trang chỉnh sửa</h5>
            </Link>
            <section className="editPostsContainer">
                <div>{title}</div>
                <form className="singleEditPostContainer">
                    <label>
                        Tên bài viết
                        <input placeholder="Post title" value={newTitle} onChange={titleChangeHandler}>
                        </input>
                    </label>
                    <label>
                        Chủ đề
                        <select value={newTopic} onChange={topicChangeHandler}>
                        {Topics.map((topic, index) => (
                            <option value={topic.postName} key={index}>{topic.name}</option>
                        ))}
                    </select>
                    </label>
                    <label>
                        Ảnh minh hoạ
                        <input value={imgUrl} placeholder="web link tới ảnh minh hoạ" onChange={imgUrlChangeHandler}></input>
                    </label>
                    <label>
                        Nội dung
                        <textarea placeholder="Post content" value={newContent} onChange={contentChangeHandler}></textarea>
                    </label>
                    
                    <button type="submit" className="btn btn-Green colorDarkBlue button-container-footer" onClick={submitHandler}>Submit</button>
                </form>
            </section>
        </Layout>
    )
}

postToEdit.getInitialProps = ({query}) => {
    return {
        title: query.postToEdit
    }
}

export default postToEdit;
