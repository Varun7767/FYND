const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://0.0.0.0:27017/";

async function findOne() {

const client = await MongoClient.connect(url, { useNewUrlParser: true })

    .catch(err => { console.log(err); });

if (!client) {

    return;

}

try {

    const db = client.db("college");

    let collection = db.collection('Deapartment');

    let query ={"name": "Raje"}

    let res = await collection.findOne(query);
console.log(res);

} catch (err) {

    console.log(err);

} finally {

   client.close();

}
}

findOne();