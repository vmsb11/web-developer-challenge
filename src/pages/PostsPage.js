import React from 'react';
import Header from '../components/Header';
import PostForm from '../components/PostForm';
import Feed from '../components/Feed';
import './PostsPage.css';

export default class PostPage extends React.Component {

    render() {

        return (
            <div className="PostsPage">
                <Header/>
                <PostForm/>
                <Feed/>
            </div>
        );
    }
}