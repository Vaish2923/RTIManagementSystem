const express = require('express');
const exphbs = require('express-handlebars');
const mongoose=require('mongoose')

const path = require('path');
const cors = require('cors')
const hbs = require('hbs');
require('dotenv').config();


const partialpath = path.join(__dirname, '/views/partials');

const app = express();
console.log(process.env.MONGODB_URL)


mongoose.connect(
    process.env.MONGODB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    () => console.log('connected to db...'),
  );

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors());

app.set('views', path.join(__dirname,'/views/'));

hbs.registerPartials(partialpath);
app.engine('hbs',exphbs({ extname : 'hbs', defaultLayout : 'mainLayout',layoutsDir : __dirname+'/views/layouts/'}));
app.set('view engine', 'hbs');



app.get('/',(req,res)=>res.render('employee/home.hbs'))


const navbarRoute = require('./controllers/navbar');
app.use('/navbar', navbarRoute);


const verticlenavbarRoute = require('./controllers/vertical_nav');
app.use('/vertical_nav' , verticlenavbarRoute);

const employeeRoute= require('./controllers/employeeController');
app.use('/employee', employeeRoute);

const authRoute = require('./controllers/auth');
app.use('/auth',authRoute)


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log('express server started at port '+PORT);
});

