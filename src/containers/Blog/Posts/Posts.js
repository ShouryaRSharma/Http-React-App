import React, { Component, Fragment } from 'react';
import axios from '../../../axios';

import Post from '../../../components/Post/Post';

class Posts extends Component {
    constructor() {
        super();
        this.state = ({
            posts: [],
            selectedPostId: null
        })
    }

    componentDidMount () {
        axios.get('/posts').then(response => {
            const posts = response.data.slice(0, 6);
            const updatedPosts = posts.map(post => {
                return {
                    ...post, 
                    author: 'Max'
                }
            })
            this.setState({
                posts: updatedPosts
            });
            console.log("Component Did Mount");
        });
    }

    postClickedHandler = (id) => {
        this.setState({
            selectedPostId: id
        });
    }

    checkPost = (posts) => {
        return !posts ? null : posts.map(post => {
            return <Post key={post.id} title={post.title} author={post.author} clicked={() => this.postClickedHandler(post.id)}/>;
        });
    }

    render() {
        const posts = this.state.posts;

        return (
            <Fragment>
                <section className="Post-heading">
                        <h2 className="mx-2 my-1">Posts</h2>
                </section>
                <section className="Posts">
                    {this.checkPost(posts)}
                </section>
            </Fragment>
        );
    }
}

export default Posts;