const mongoose = require('mongoose');

const URL = 'mongodb+srv://gateavalon:lceco1985@clustergl.6x39r.mongodb.net/nodeSample?retryWrites=true&w=majority';
const connectDB = async () => {
    await mongoose.connect(URL, 
        { useUnifiedTopology: true,
          useNewUrlParser: true
        });
    console.log('connected to MongoDB');
};

module.exports = connectDB;
