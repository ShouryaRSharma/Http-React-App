import React, { Component } from 'react';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import Nav from '../Navbar/Navbar';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch } from 'react-router-dom';

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
                                <NavLink to="/" exact className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item" type="checkbox">
                                <NavLink to="/new-post" className="nav-link">New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}/>
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/:id" exact component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;