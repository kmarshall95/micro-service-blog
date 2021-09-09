//imports express
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

//create express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

//depreceatied
// app.use(bodyParser.urlencoded());

// app.use(bodyParser.json());

//handles posts
const posts = {};

//handles express app get methods
app.get('/posts',(req, res) => {
    res.send(posts);
});

//handles express app post methods
app.post('/posts', (req, res) => {

    /*generate a random id when 
    someone creates a new post*/
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;

    posts[id] = {
        id, title
    };

    res.status(201).send(posts[id]);
});

//port that app listens on
app.listen(4000, () => {
    console.log('Listening on 4000');
});