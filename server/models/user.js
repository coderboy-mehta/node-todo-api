var mongoose =require('mongoose');

var user = mongoose.model('user',{
    e_mail: 
    {
    type: String,
    trim : true,
    minlength :10,
    require : true
} 
});


module.exports ={user};

//var newUser = new user({
//     e_mail : "abc@abc.com"
// });

// newUser.save().then( (res) => {
//   console.log(JSON.stringify(res , undefined , 2));
// });