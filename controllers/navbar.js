const express = require('express');

 const router = express.Router();
router.get('/home', (req, res) => {
    res.render('employee/home.hbs');
})


router.get('/slide', (req, res) => {
    res.render('employee/slide.hbs');
})


router.get('/login', (req, res) => {
    res.render('employee/login.hbs');
})



router.get('/main', (req, res) => {
    res.render('employee/main.hbs');
})

router.get('/employee', (req, res) => {
    res.render('employee/addOrEdit.hbs');
})

module.exports = router;