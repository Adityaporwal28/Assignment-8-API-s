var express = require('express');
var router = express.Router();
var {getCities,addCity}= require('../controller/cityController')

router.get('/',(req,res)=>{
    res.send("Default API get called for City")
});


// Get Cities 

router.get('/getCities',(req,res)=>{
    getCities(req,res);
});

// Adding city

router.post('/addCity',(req,res)=>{
    addCity(req,res);
})

module.exports = router;