var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    res.send("Default API get called for MealType")
});


module.exports = router;