import React from "react";
import { connect } from "react-redux";
import Post from './Post';
import './Feed.css';

class Feed extends React.Component {

    render() {

        const { postStore } = this.props;
        const { posts } = postStore;
        const postsList = posts.map((post, index) => {
            return <Post post={post} key={index}/>
        });

        return (
            <div className="Feed">
                <h4 className="lblFeed">Feed</h4>
                {
                    (postsList.length > 0) ?
                    <div>
                        {postsList}
                    </div>
                    :
                    <div className="noPosts">
                        <span className="message">Não há posts cadastrados</span>
                    </div>
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    postStore: state.postStore
});


export default connect(mapStateToProps)(Feed);