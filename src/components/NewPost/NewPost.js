import React, { Component } from 'react';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label className="form-label">Title</label>
                <input type="text" className="form-control" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label className="form-label">Content</label>
                <textarea rows="4" className="form-control" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label className="form-label">Author</label>
                <select className="form-select form-select-sm" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button type="submit" className="btn btn-dark mt-3 mb-2">Add Post</button>
            </div>
        );
    }
}

export default NewPost;