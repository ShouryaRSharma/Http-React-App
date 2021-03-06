import React, { Component, Fragment } from 'react';
import axios from '../../../axios';
import { Link, Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

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
        });
    }


    postClickedHandler = (id) => {
        this.setState({
            selectedPostId: id
        });
    }


    checkPost = (posts) => {
        return !posts ? null : posts.map(post => {
            return (
                <Link key={post.id} to={'/posts/' + post.id}>
                    <Post 
                    title={post.title} 
                    author={post.author} 
                    clicked={() => this.postClickedHandler(post.id)}/>
                </Link>
            )
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
                <Route path="/posts/:id" exact component={FullPost} />
            </Fragment>
        );
    }
}

export default Posts;