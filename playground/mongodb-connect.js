// const MongoClient =require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj =new ObjectID;
// console.log(obj);
// var usr ={name:'anm', age: 24};
// var {name}=usr;
// console.log(name) 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
 if(err)
    {
    return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text : 'something to do',
    //     completed : false

    // },(err, result) => {
    //     if(err)
    // {
    //     return console.log('Unable to insert to MongoDB server', err);
    // }
    //  console.log(JSON.stringify(result.ops , undefined, 2))
    // });
          
    //  db.collection('User').insertOne({
    //     name : 'something to do',
    //     age : 23,
    //     location : 'hsp' 

    // },(err, result) => {
    //     if(err)
    // {
    //     return console.log('Unable to insert to MongoDB server', err);
    // }
    // //  console.log(JSON.stringify(result.ops , undefined, 2));
    //  console.log(result.ops[0]._id.getTimestamp());
    // });




    db.close();
});