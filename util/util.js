const MongoClient = require('mongodb').MongoClient;
const DBCONFIG = require('../lib/config').getDB().db;
class Util{
    constructor() {

    }

    connectDB(fn){
        MongoClient.connect(DBCONFIG.link, (err, client) => {
            if(err){
                console.error(err);
                return false;
            }else{
                const db = client.db(DBCONFIG.name);
                !!fn && fn(client, db);
            }
        })
    }
    insertData(db, data, fn){
        const collection = db.collection(DBCONFIG.name);
        collection.insert(data,(err, result) => {
            !!fn && fn(result);
        })
    }
}

module.exports = new Util;
