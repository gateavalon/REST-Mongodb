const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const connectDB = require('./connectDB');


//middleware
app.use(bodyParser.json()); //use body parser for posting
app.use(express.json({ extended: false}))

//Import routes
const postRoute = require('./routes/posts');
const userRoute = require('./routes/users');

app.use('/posts', postRoute);
app.use('/users', userRoute);


//Routes
app.get('/', (req, res) => {
    res.send('Home test Page')
});

// app.get('/posts', (req, res) => {
//     res.send('Post 2 Page')
// });

//Connect to db
mongoose.connect('mongodb+srv://gateavalon:bnnLN1P1ULF8VCzH@clustergl.6x39r.mongodb.net/nodeSmaple?retryWrites=true&w=majority',
{ useUnifiedTopology: true,
  useNewUrlParser: true
},
() => console.log('DB connected'));


// const uri = "mongodb+srv://gateavalon:bnnLN1P1ULF8VCzH@clustergl.6x39r.mongodb.net/nodeSample?retryWrites=true&w=majority";
// const client = new MongoClient(uri,
//     { 
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
// client.connect().then(result => {
// //   const database = client.db("nodeSample")
//     // console.log(result);
//      console.log("DB connected")
// }, error => {
//   console.log(error);
// });


app.listen(3001, ()=> console.log("Server Started"));

