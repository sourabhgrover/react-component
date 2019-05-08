import React from 'react';
// import ReactDOM from 'react-dom';
// import faker from 'faker';
// import { deflateRawSync } from 'zlib';

const CommentDeatil = props =>{
    // console.log(props);
    return (
        <div className="comment">
        <a href="/" className="avatar">
        <img alt="avatars" src = {props.imgSrc} ></img>
        </a>
        <div className="content">
        <a href="/" className="author">
        {props.author}
        </a>
        <div className="metadata">
        <span className="date">{props.date}</span>
        </div>
        <div className="text">
        {props.commentText}
        </div>
        </div>
        </div>
    );
}

export default CommentDeatil;