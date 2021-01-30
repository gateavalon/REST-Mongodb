const express = require('express');
const router = express.Router();
const Post = require('../models/postModel');
const mongoose = require('mongoose');

router.get('/:id', (req, res) => {
    const id = req.params.id
    Post.findById(id).then(data => {
        res.json(data);
    });
});


router.get('/', (req, res) => {
    Post.find().then(data => {
        res.json(data);
    });
});


router.post('/insert', (req, res) => {
    // console.log(req.body)

    // const {title, description, date} = req.body;
    // let post = {};
    // post.title = title;
    // post.description = description;
    // post.date = date;
    // let postmodel = new postSchema(post);
    // await postmodel.save();
    // res.json(postmodel);

    let post = new Post({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    });

    post.save()
    .then(data => {
        // console.log(data);
        res.json({ message: "Added successfully"})
        res.json(data)
    })
    .catch(error => {
        console.log(error)
    })
})

// router.get('/specific', (req, res) => {
//     res.send('We are on specific page')
// });

module.exports = router