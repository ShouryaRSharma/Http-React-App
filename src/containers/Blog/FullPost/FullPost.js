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

    componentDidMount() {
        console.log(this.props);
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id)) {
                axios.get('/posts/' + this.props.match.params.id).then(
                    response => {
                        this.setState({
                            loadedPost: response.data
                        });
                    }
                );
            }
        }
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== parseFloat(this.props.match.params.id))) {
                axios.get('/posts/' + this.props.match.params.id).then(
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
        axios.delete('/posts/' + this.props.match.params.id).then(response => {
            console.log(response);
        })
    }

    render () {
        let post = <div className="FullPost"><p>Please select a Post!</p></div>;

        if(this.props.match.params.id) {
            post = <div className="FullPost"><p>Loading...</p></div>;
        }

        if (this.props.match.params.id && this.state.loadedPost) {
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