const express = require('express');

 var router = express.Router();

router.post('/login', (req, res) => {
    console.log(req.body);
    //validate here
    if(req.body.username==='adminRTI' && req.body.password==='adminRTI')
        // res.redirect('/employee/list');
        res.redirect('/employee/dashboard');
    else    
        res.render('employee/login.hbs', {
            error:'Invalid Credentials'
        });
});

// router.post('/home',(req,res)=>{
//     res.render('/employee/home');
// });

router.post('/slide',(req,res)=>{
    res.render('/employee/slide');
});
router.post('/response',(req,res)=>{
    res.render('/employee/response');
});


    module.exports = router;