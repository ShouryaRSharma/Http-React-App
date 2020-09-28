import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    constructor() {
        super();
        this.state = ({
            posts: [],
            selectedPostId: null
        })
    }

    componentDidMount () {
        axios.get('http://jsonplaceholder.typicode.com/posts').then(response => {
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
        })
    }

    checkPost = (posts) => {
        return !posts ? null : posts.map(post => {
            return <Post key={post.id} title={post.title} author={post.author} clicked={(id) => this.postClickedHandler(id)}/>;
        });
    }
    
    render () {
        const posts = this.state.posts;
        
        return (
            <div>
                <section className="Post-heading">
                    <h2 className="mx-2 my-1">Posts</h2>
                </section>
                <section className="Posts">
                    {this.checkPost(posts)}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;