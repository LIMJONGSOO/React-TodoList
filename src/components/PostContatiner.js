import React, {Component} from 'react';
import { PostWrapper, Navigate, Post } from '../../components';
import * as service from '../../services/post';


class PostContainer extends Component {

    /*
    fetchPostInfo = async (postId) => {
        const post = await service.getPost(postId);
        console.log(post);
        const comments = await service.getComments(postId);
        console.log(comments);
    }
    */

    fetchPostInfo = async (postId) => {

        this.setState({
            fetching: true // requesting..
        });

        const info = await Promise.all([
            service.getPost(postId),
            service.getComments(postId)
        ]);

        console.log(info);
        
        // Object destructuring Syntax,
        // takes out required values and create references to them
        const {title, body} = info[0].data; 
                                            
        const comments = info[1].data;

        this.setState({
            postId,
            post: {
                title, 
                body
            },
            comments,
            fetching: false // done!
        });
    }

    render() {
        const {postId, fetching, post, comments} = this.state;

        return (
            <div className="form">
                <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color}}/>
                <div className="create-button" onClick={onCreate}>
                추가
                </div>
            </div>
        );
    }
}

export default PostContainer;