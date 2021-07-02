const express = require('express');

 var router = express.Router();
const mongoose = require('mongoose');
const Employee =require('../models/employee_model')



router.get('/',  (req,res) => {

    res.render("employee/addOrEdit",{
        viewTitle : "Right To Information Form"
    });

});

router.post('/' , (req,res) => {
    var employee = new Employee();
    employee.rtino = req.body.rtino; 
employee.rticat = req.body.rticat;    
employee.fullname = req.body.fullname;
employee.gender = req.body.gender;

employee.address = req.body.adress;
employee.datereq = req.body.datereq;
employee.summary = req.body.summary;
employee.extrainformation = req.body.extrainformation;




employee.save((err, doc) => {
    if(!err) {
            res.redirect('employee');

    }
    else{
        if(err.name == 'ValidationError'){
            handleValidationError(err , req.body);

            res.render("employee/addOrEdit",{
                viewTitle : "Insert Employee",
                employee : req.body
           });
        }
                    console.log('error during record insersion : '+err);
    }
})
});

router.get('/login',(req,res)=>res.render('employee/login'))

router.get('/response',(req,res)=>res.render('employee/response'))


router.get('/main',(req,res)=>res.render('employee/main'))

router.post('/main',(req,res)=>{
    console.log(req.body);
});

router.post('/login', (req, res) => {
    const username= req.body.username;
    const passwordU = req.body.password;
   // console.log(`${username} and ${passwordU}`);
    Login.findOne({
        fname: username
    } ,async(err,user)=>{
        try {
            if(passwordU == user.password){
                // res.status(201).render("list");
                res.send('successfully');
                console.log('succefullys');
            }
            else{
                console.log('wrong password');
                res.send('wrong credentials');
            }
        } catch (error) {
            console.log('user not found');
            res.send(`${error}`);
        }
    });
})

router.get('/list',  (req,res) => {

    Employee.find((err,docs)=>{
        if (!err) {
            console.log(docs)
            res.render("employee/list" ,{
               
                docs
            });
        }
        else{
            console.log('Error in retrieving employee list: '+ err);
        }
    }).lean()
});

let user=0;

async function getUsers (){
     user = await Employee.find().countDocuments()
   console.log(user);
   //res.send(user);
   
}
getUsers();

router.get('/dashboard',  (req,res) => {

    Employee.find((err,docs)=>{
        if (!err) {
            console.log(docs)
            res.render("employee/dashboard" ,{
               
                docs,
                viewTitle:`${docs.length}`
            });
        }
        else{
            console.log('Error in retrieving employee list: '+ err);
        }
    }).lean()
});




 function handleValidationError(err,body){

 for(field in err.errors){
    switch(err.errors[field].path){
        case 'fullname':
          body['fullNameError']= err.errors[field].message;
            break;

        case 'rtino':
                body['rtinoError']= err.errors[field].message;
                break;

        case 'rticat':
            body['rticatError']= err.errors[field].message;
            break;

        case 'datereq':
            body['datereqError']= err.errors[field].message;
            break;

        case 'summary' :
            body['summaryError']= err.errors[field].message;
            break;

        case 'extrainformation':
            body['extrainformationError']= err.errors[field].message;
            break;


        default : 
            break;
    }
}

 }


//response work
 router.get('/:id',(req,res)=>{
    Employee.findById(req.params.id, (err,doc)=>{
        if(!err){
            res.render("employee/response", {
                
            });
        }
    })
 });

 router.post('/employee/list',(req,res)=>{
     if(req.body._id==''){
         insertRecord(req,res);
     }
     else{
         update_response(req,res);
     }
        
 });


 function insertRecord(req,res){

    const response = new Employee();
    response.textarea = req.body.texrarea;

    response.save((err, doc) => {
        if(!err) {
                console.log('inserted successfully....');
        }
        else{

        }
    });
 }

 function update_response(req,res){
    const response = new Employee();
    response.textarea = req.body.texrarea;

    response.save((err, doc) => {
     Employee.findOneAndUpdate({_id:req.body._id}, req.body,{new:true}, (err,doc)=>{
         if(!err){
            //  Updated record is retrive here
             res.redirect('employee/list');
         }
        
        else{
            console.log('error during record update:')
        }
     });
    });
 }
//end of response


// router.get('/dashboard',  (req,res) => {

//     res.render("employee/dashboard",{viewTitle:`${user}`}
       
//     );

// });


 module.exports = router;