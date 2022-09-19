var express = require('express');
var router = express.Router();
var {getRestaurants,addRestaurant}= require('../controller/resataurantController');

router.get('/',(req,res)=>{
    res.send("Default API get called for Restaurant")
});


// Over Here I am caling the API to get all Restaurants available in Database

router.get('/getRestaurants',(req,res)=>{
    getRestaurants(req,res);
});


router.post('/addRestaurant',(req,res)=>{
    addRestaurant(req,res);
});




module.exports = router;