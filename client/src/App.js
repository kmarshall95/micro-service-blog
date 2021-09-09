import React from 'react';
import PostCreate from './PostCreate';
//required for displaying React app, canvas maybe?
export default () => {
    return <div className="container">
        <h1>Create Post</h1>
        <PostCreate/>
    </div>;
};