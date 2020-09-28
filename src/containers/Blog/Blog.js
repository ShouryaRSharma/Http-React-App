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
            posts: null
        })
    }

    componentDidMount () {
        axios.get('http://jsonplaceholder.typicode.com/posts').then(response => {
            this.setState({
                posts: response.data
            });
            console.log("Component Did Mount");
        });
    }

    checkPost = (posts) => {
        return !posts ? null : posts.map(post => {
            return <Post key={post.id} title={post.title}/>;
        });
    }
    
    render () {
        const posts = this.state.posts;
        
        return (
            <div>
                <section className="Posts">
                    {this.checkPost(posts)}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;