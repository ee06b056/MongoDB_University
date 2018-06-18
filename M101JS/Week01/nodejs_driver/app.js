const MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbName = 'video';

MongoClient.connect(url,function (err, client) {

    assert.equal(null, err);
    console.log('Successfully connected to server');

    const db = client.db(dbName);

    

    db.collection('movies').find({}).toArray(function (err, docs) {
        docs.forEach((doc) => {
            console.log(doc.title);
        });
    });

    
    console.log('Called find()');

    client.close();
});

console.log('Called connect()');
