import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    constructor() {
        super();
        this.state = ({
            loadedPost: null
        })
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('/posts/' + this.props.id).then(
                    response => {
                        this.setState({
                            loadedPost: response.data
                        });
                    }
                );
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.id).then(response => {
            console.log(response);
        })
    }

    render () {
        let post = <div className="FullPost"><p>Please select a Post!</p></div>;

        if(this.props.id) {
            post = <div className="FullPost"><p>Loading...</p></div>;
        }

        if (this.props.id && this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h2 className="text-capitalize">{this.state.loadedPost.title}</h2>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;