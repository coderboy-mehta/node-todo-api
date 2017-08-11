const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {

    if(err)
    {
    return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');

//   db.collection('Todos').deleteOne({text : 'have milk'}).then((result) => {
//       console.log(result);
//   });

// db.collection('Todos').deleteMany({text : 'have milk'}).then((result) => {
//       console.log(result);
//   });

// db.collection('Todos').findOneAndDelete({text : 'have milk'}).then((result) => {
//       console.log(result);
//   });

// db.collection('clientbro').deleteMany({name : 'andrew'}).then((result) => {
//        console.log(result);
//    });

db.collection('clientbro').findOneAndDelete({_id :  new ObjectID('598d91c16708826d6d91f304')}).then((result) => {
       console.log(result);
   });


    db.close();
});