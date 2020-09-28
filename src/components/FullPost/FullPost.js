import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    render () {
        let post = <div className="FullPost"><p>Please select a Post!</p></div>;

        if (this.props.id) {
            post = (
                <div className="FullPost">
                    <h1>Title</h1>
                    <p>Content</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;