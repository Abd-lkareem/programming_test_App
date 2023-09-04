var express = require('express');
var router = express.Router();
const Users = require('../db/users');


// const mongoose = require('mongoose');
const User = require('../db/users');


 var arr = ["what the capital of syria ?","homs","aleepo","damascus","hama"]


 router.get('/send', function(req, res, next) {

        res.send({m :"kgjfjfjgjg"})
       

});
router.post('/send',async function(req, res, next){
    const newUser = await new Users({
        name:req.body.name,
        password:req.body.password
    })
    newUser.save((error,result)=>{error ? console.log(error):res.send({mess:true})});
     
})




router.get('/', function(req, res, next) {
   
    res.send("hello from the ...")

});
module.exports = router;
