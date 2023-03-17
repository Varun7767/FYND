const mongodb =require('mongodb');
const url="mongodb://0.0.0.0:27017";
const client =new mongodb.MongoClient(url);


async function run(){
    try{
        await client.connect();

        const userCollection =client.db("college").collection("Department");

        const cursor = userCollection.find({});

        await cursor.forEach((docs)   =>  {

            console.log(docs);

        });
        // console.log("aggretion query");
        // const aggregate =userCollection.aggregate({
        //     $lookup:{
        //         from:"posts",
        //         localField:"username",
        //         foreignField:"username",
        //         app:"user_post",
        //         as
        //     }
        // })
}
catch (e) {
    console.error(e);
  } finally {
    await client.close();//wait
  }
}