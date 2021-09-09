const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

//starting an express app
const app = express();
//allowing json to be parsed in body
app.use(bodyParser.json());
app.use(cors());

//store comments
const commentsByPostId = {};

//get methods
app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

//post methods
app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = commentsByPostId[req.params.id] || [];

    comments.push({id: commentId, content});

    commentsByPostId[req.params.id] = comments;

    res.status(201).send(comments);
});

//port that the app is listening on
app.listen(4001, () => {
 //logs in terminal
 console.log('Listening on 4001');
});

