import React, { useState } from 'react';
import Layout from '../../components/Layout'
import Topics from '../../static/topic.json';

const postToEdit = ({title}) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newTopic, setNewTopic] = useState("Initial Topic");
    const [newContent, setNewContent] = useState();
    const [fullArticle, setFullArticle] = useState(); // here it should be the article fetch from DB as initial state

    const titleChangeHandler = (e) => {
        setNewTitle(e.target.value);
    }

    const topicChangeHandler = (e) => {
        setNewTopic(e.target.value);
    }

    const contentChangeHandler = (e) => {
        setNewContent(e.target.value);
    }

    //testing for form content
    const submitHandler = (e) => {
        e.preventDefault();
        let newArticle = {};
        newArticle.title = newTitle;
        newArticle.topic = newTopic;
        newArticle.content = newContent;
        setFullArticle(newArticle);
        console.log(newArticle);
    }
    return (
        <Layout>
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

