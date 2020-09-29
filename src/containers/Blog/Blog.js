import React, { Component } from 'react';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import Nav from '../Navbar/Navbar';
import Posts from './Posts/Posts';
import { Route, Link } from 'react-router-dom';

import './Blog.scss';

class Blog extends Component {
    constructor() {
        super();
        this.state = ({
            posts: [],
            selectedPostId: null
        })
    }

    render () {
        return (
            <div>
                <header className="toolbar">
                    <Nav />
                    <nav className="main-navigation">
                        <ul className="nav-items">
                            <li className="nav-item" type="checkbox">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item" type="checkbox">
                                <Link to="/new-post" className="nav-link">New Post</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" exact component={NewPost}/>
                {/* <Posts /> */}
                {/* <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;