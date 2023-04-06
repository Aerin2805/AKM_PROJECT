const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const routes = require('./routes/main')
const Detail = require("./models/Detail")
const Slider = require("./models/Slider")
const Service = require("./models/Serveice")
app.use(bodyParser.urlencoded({extended:true}))
app.use('',routes)
//app.use(express.static('public'))
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")
app.use('/static', express.static('public'))

//DB connections
mongoose.connect("mongodb://127.0.0.1:27017/WEBSITE")
.then(()=>{
console.log("mongodb connected");

// Service.create([
//     {
//         icon:'fab fa-accusoft',
//         title: 'Provide Best Courses',
//     description : 'We provied courses that helps our student in learing and in placement.',
//     link : 'Check',
//     linkText : 'https://www.learncodewithdurgesh.com',

//     },
//     {
//     icon:'fab fa-affiliatetheme',
//     title: 'Learn Projects',
//     description : 'We provied courses that helps our student in learing and in placement.',
//     link : 'Learn',
//     linkText : 'https://www.learncodewithdurgesh.com',

//     },
//     {
//     icon:'fab fa-accusoft',
//     title: 'Provide Best Courses',
//     description : 'We provied courses that helps our student in learing and in placement.',
//     link : 'Check',
//     linkText : 'https://www.learncodewithdurgesh.com',

//     },
// ])
// Slider.create([
//     {
//         title : 'Learn C++ in very easy manner ',
//         subTitle : 'C++ is one of the most popular programming langauge.',
//         imageUrl : "/static/images/s1.png"
//     },
//     {
//         title : 'What is Dart in flutter',
//         subTitle : 'Dart Language is use in Flutter.',
//         imageUrl : "/static/images/s2.png"
//     },
//     {
//         title : 'What about node js ?',
//         subTitle : 'Node js is runtime environment to execute javascript outside brower',
//         imageUrl : "/static/images/s3.png"
//     },
// ])
// Detail.create({
//     brandName:"Soham Technical Solution",
//     brandIconUrl:"https://cdn.dribbble.com/users/2407143/screenshots/10717422/media/c04579f8daddd26d647cf04070d5cf50.png?compress=1&resize=400x300&vertical=top",
//     links : [
//         {
//             label:"Home",
//             url:"/"
//         },
//         {
//             label:"Services",
//             url:"/services"
//         },
//         {
//             label:"Gallery",
//             url:"/gallery"
//         },
//         {
//             label:"About",
//             url:"/about"
//         },
//         {
//             label:"Contact US",
//             url:"/Contact-uS"
//         },
//     ]
// })
})

.catch(()=>{
    console.log("failed to connect");
})



app.listen(process.env.PORT || 3000, ()=>{
    console.log("server running at giving PORT");
})