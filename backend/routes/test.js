var express = require('express');
var router = express.Router();
const oop =  require('../db/oop'); 
const basics_Level_One = require('../db/basics_Level_One');
const basics_Level_Two = require('../db/basics_Level_Two');
const Users = require('../db/users');




router.post('/results', async(req,res,next)=>{
   const Username = req.body.username ;
   const Result = req.body.result;

   const x = await Users.find({username : Username })
   const PreviousResult = x[0].testsInfo;
   await  Users.updateOne({username : Username },{$set :
                       {testsInfo :[ ...PreviousResult ,{ result : Result }
                                      ]}},(err,res)=>{console.log(res)})
   
   
 const y = await Users.find({username :Username})
 res.send({testsInfo: y[0].testsInfo})

    
})
router.post('/',async (req,res,next)=>{

 if(req.body.TableName == 'basics_one') {

    const a = await basics_Level_One.find({});
    var i = 0;
    var arr =[]
    var rand ;
    var cond = [];
 
    while (true) {
     
     
       rand = Number(((Math.random(i)*10)+i).toFixed())
       cond = arr.filter((ele,index)=>{return ele == rand});
       
       if(cond.length==0)
       {    if(rand < 135)
          { arr[arr.length] = rand ;
               }
        
          }
  
       i++; 
       
       if(arr.length == 40) 
            break  
  
       }
    
    var arrpart = [];
   
    for (var i = 0 ; i < 8 ; i ++)
     {
        arrpart[i] = a[arr[i]];
     }
    
     
    res.send({data:arrpart,mess:true})
     
 }
 
 else

    if(req.body.TableName == 'basics_two'){
    
 
      const a = await  basics_Level_Two.find({});
      var arrpart = [];
      var i = 0;
      var newarr = []
      var cond ;
   
      //random Indexes
   
   
   
      for (var i = 0 ; i < 8 ; i ++)
       {
         arrpart[i] = a[i];
         while(true)
         {    
              rand = Number(((Math.random(i)*10).toFixed()));
            //   rand = rand%arrpart[i].incorrect_answer.length   
              rand = rand%a[i].incorrect_answer.length    
               cond = newarr.filter((ele,index)=>{return ele == rand});
                if(cond.length==0){
                      newarr[newarr.length] = rand}
             
          
              if(newarr.length == arrpart[i].incorrect_answer.length)
                    break;
         }
         var temp = [];
         for(var j = 0 ; j < arrpart[i].incorrect_answer.length ; j++){
            temp[j] = arrpart[i].incorrect_answer[newarr[j]]; 
             
            // arrpart[i].incorrect_answers[j] = temp ;
         }
         
         arrpart[i].incorrect_answer = temp;
       }
         
      
    res.send({data:arrpart,mess:true})
 }

   else

   if(req.body.TableName == 'OOP')
 {
    
   const a = await  oop.find({});

   var arrpart = [];

   for (var i = 0 ; i < 8 ; i ++)
   {
       arrpart[i] = a[i];
   }
   
    
    res.send({data:arrpart,mess:true})

 }
 else if(req.body.TableName == 'general'){
 
   const a1 = await  basics_Level_One.find({});
   const a2 = await  basics_Level_Two.find({});
   const a3 = await  oop.find({});
   var arr = [];

   for(var i = 0 ; i < 10 ; i++){
       if(i%3==0)
         arr[i] = a1[i]
      else if(i%2==0)
         arr[i] = a2[i]
      else
         arr[i] = a3[i]
   }   
   res.send({data:arr,mess:true})

 }
 else
 res.send({mess:false})
})

 
// router.get('/a',async (req,res,next)=>{
   
   
   // const a = await basics_Level_One.find({});
   // // var arrpart = [];
   // // var i = 0;
   // var newarr = []
   // var cond ;

   // //random Indexes

   // for (var i = 0 ; i < a.length ; i ++)
   //  {
   //    // arrpart[i] = a[i];
   //    while(true)
   //    {
   //         rand = Number(((Math.random(i)*10).toFixed()));
   //         rand = rand%a[i].incorrect_answer.length 
   //          cond = newarr.filter((ele,index)=>{return ele == rand});
   //           if(cond.length==0){
   //                 newarr[newarr.length] = rand}
          
       
   //         if(newarr.length == a[i].incorrect_answer.length)
   //               break;
   //    }
   //    var temp = [];
   //    for(var j = 0 ; j < a[i].incorrect_answer.length ; j++){
   //       temp[j] = a[i].incorrect_answer[newarr[j]]; 
          
          
   //    }
      
   //    // arrpart[i].incorrect_answer = temp;
    
      
               
   //       //   await basics_Level_One.updateOne({id : a[i].id} ,{ $set:{incorrect_answer : temp}})
              
   // }
// //new
//    const a = await basics_Level_One.find({}); 
//    var newarr = []
//    var cond;
//    for(var i = 130 ; i < 135 ; i++){
//    while(true){
//               rand = Number(((Math.random(i)*10).toFixed()));
//               rand = rand%a[i].incorrect_answer.length 
//                cond = newarr.filter((ele,index)=>{return ele == rand});
//                 if(cond.length==0){
//                       newarr[newarr.length] = rand}
             
          
//               if(newarr.length == a[i].incorrect_answer.length)
//                     break;
//                 }
//          var temp = [];
//          for(var j = 0 ; j < a[i].incorrect_answer.length ; j++){

//               temp[j] = a[i].incorrect_answer[newarr[j]]; 
//                       }
   
//      basics_Level_One.updateOne({id : a[i].id} ,{ $set:{incorrect_answer : [...temp] }},(error,res)=>{console.log(res)})
   
//                      }
//                      res.send("test")
// })

module.exports = router;
