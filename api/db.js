const {MongoClient} =  require('mongodb');
const {mongodbUrl} = require('./config');


exports.connect = (cb) => {

    //Mongodb version 3

    MongoClient.connect(mongodbUrl, (err, client) => {

        console.log("connected");
       return cb(err, client);


    });
};