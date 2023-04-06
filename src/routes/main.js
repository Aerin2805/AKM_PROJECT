const express = require("express");
const {route} = require("express/lib/application")
const Detail = require("../models/Detail")
const Slider = require("../models/Slider");
const Serveice = require("../models/Serveice");
const bodyParser = require("body-parser");
const Contact = require("../models/Contact");
const routes = express.Router();

routes.get("/", async (req,res)=>{
    const ddetails = await Detail.findOne({"_id": "642bad46194d5dc740c83eb1"})
    const slides = await Slider.find()
    const services = await Serveice.find()
    //console.log(ddetails)

    res.render("index" ,{
        details:ddetails,
        slides : slides,
        services : services 
        
    })
})

routes.post("/process-contact-form", async (req,res)=>{
  console.log(req.body)
  // save data in db
  try{

    const data = await Contact.create(req.body)
    res.redirect("/")
  }catch(e){
        console.log(e)
        res.redirect("/")
  }
})

routes.get("/gallery", async (req,res)=>{
    const ddetails = await Detail.findOne({"_id": "642bad46194d5dc740c83eb1"})
    res.render("gallery",{
        details:ddetails
    })
})

module.exports = routes