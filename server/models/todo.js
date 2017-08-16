var mongoose =require ('mongoose');

var Todo = mongoose.model('Todo',{
    text : {
    type : String,
    require : true
},

  completed : {
      type : Boolean
  } 
,
    completedAt :{
        type : Number
    }
});


// var newT = new Todo({
//     text : 'dinner time'}
// );

// newT.save().then( (doc) => {
//     console.log(doc);
// }, (e) => {
//     console.log(e);
// });



module.exports = {Todo};