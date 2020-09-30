import React, { Component } from 'react';
import NewPost from './NewPost/NewPost';
import Nav from '../Navbar/Navbar';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.scss';

class Blog extends Component {
    constructor() {
        super();
        this.state = ({
            auth: false,
        });
    }

    render () {
        return (
            <div>
                <header className="toolbar">
                    <Nav />
                    <nav className="main-navigation">
                        <ul className="nav-items">
                            <li className="nav-item" type="checkbox">
                                <NavLink to="/posts/" exact className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item" type="checkbox">
                                <NavLink to="/new-post" className="nav-link">New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                
                <Switch>
                    {/* {this.state.auth ? <Route path="/new-post" exact component={NewPost}/> : null } */}
                    <Route path="/new-post" exact component={NewPost}/> 
                    <Route path="/" component={Posts}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;