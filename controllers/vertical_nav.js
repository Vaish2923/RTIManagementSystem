const express = require('express');
//dashboard:employee/dashboard
//manageRTI : employee/list
//
 const router = express.Router();
router.get('/dashboard', (req, res) => {
    res.render('employee/dashboard.hbs');
})


router.get('/list', (req, res) => {
    res.render('employee/list.hbs');
})


// router.get('/login', (req, res) => {
//     res.render('employee/login.hbs');
// })



// router.get('/main', (req, res) => {
//     res.render('employee/main.hbs');
// })

// router.get('/employee', (req, res) => {
//     res.render('employee/addOrEdit.hbs');
// })

module.exports = router;