const mongo = require('mongoose');
function connect(){

    mongo.connect('mongodb://localhost:27017/project',

    {useNewUrlParser : true},

     (error)=>{if(error) console.log("error was occured")

            else
 
             console.log("connection successed")
 
});


}

module.exports={
    Connect : connect
}