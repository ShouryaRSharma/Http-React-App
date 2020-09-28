import React from 'react';

import './Post.scss';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h3 className="text-capitalize">{props.title}</h3>
        <div className="Info">
            <div className="Author">Author</div>
        </div>
    </article>
);

export default post;