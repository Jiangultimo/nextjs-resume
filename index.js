const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const insertDocuments = (db, callback) => {
    const collection = db.collection('users');
    collection.insertMany([
        {
            name:'hing',
            link: 'https://github.com/Neras'
        },
        {
            name:'neras',
            link: 'https://xxhing.org'
        },
        {
            name:'nerashing',
            link: 'http://xxhing.org'
        }
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log('Inserted 3 documents into the collection');
        callback(result);
    })
}

const findDocuments = (db, callback) => {
    console.log(db);
    const collection = db.collection('users');

    collection.find({}).toArray( (err, docs) => {
        assert.equal(err, null);
        console.log('found the following records');
        console.log(docs);
        callback(docs);
    } )
}

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log(err);
    console.log('connected successfully to server');
    //console.log(client);
    //console.log(client.db('users'));
        findDocuments(client.db('users'), function() {
            client.close();
        })
})
