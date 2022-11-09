import React from 'react';
import { connect } from 'react-redux';
import {
    deletePost
} from '../store/actions';
import { toastr } from 'react-redux-toastr';
import imgDelete from '../assets/images/delete/delete.png';
import imgDelete2x from '../assets/images/delete/delete@2x.png';
import imgDelete3x from '../assets/images/delete/delete@3x.png';

import './Post.css';

class Post extends React.Component {

    constructor(props) {

        super(props);

        this.deletePost = this.deletePost.bind(this);
    }

    deletePost(post) {

        const { deletePost } = this.props;

        deletePost(post);
        toastr.success('Buildbox', 'O comentário foi removido com sucesso');
    }

    render() {

        const { post } = this.props;
        const { name, message, photo } = post;

        return (
            <div className="Post">
                <div className="deleteArea">
                    <a 
                        href="#"
                        onClick={() => this.deletePost(post)}>
                        <img 
                            alt="Delete"
                            src={imgDelete}
                            srcSet={`${imgDelete2x} 2x,${imgDelete3x} 3x`}
                            className="imgDelete"/>
                    </a>
                </div>
                <div className="content">
                    <div>
                        <img
                            className="imgAvatar" 
                            src={photo}/>
                    </div>
                    <div className="postContent">
                        <div>
                            <span className="lblMessage">{message}</span>
                        </div>
                        <div>
                            <h5 className="lblFrom">Enviado por</h5>
                            <h5 className="lblAuthor">{name}</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    deletePost
};

export default connect(null, mapDispatchToProps)(Post);