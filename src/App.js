import React from 'react';
import PostPage from '../src/pages/PostsPage';
import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <PostPage/>
      </div>
    );
  }
}