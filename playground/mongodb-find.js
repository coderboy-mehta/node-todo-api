const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {

    if(err)
    {
    return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');

    // db.collection('Todos').find({completed : true}).toArray().then( (docs) => {
    //     console.log('todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch', err);
    // });

    db.collection('clientbro').find({name : 'andrew'}).toArray().then( (docs) =>  {
        console.log(JSON.stringify(docs, undefined, 4));
    }, (err) => {

        console.log('unable to fetch', err);
    }
 );





    db.close();
});