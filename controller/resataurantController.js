var resSchema = require('../models/restaurantModel');

getRestaurants = (req,res)=>{
resSchema.find((Error,response)=>{
    if(Error){
        response.send("Some Exception occured")
    }
    else
    res.send(response);
})
}

addRestaurant=(req,res)=>{
    const restToAdd = new resSchema({
        name:req.body.name,
        city:req.body.city,
        locality:req.body.locality,
        min_price:req.body.min_price,
        cuisine:req.body.cuisine,
        contact:req.body.contact,
        image:req.body.image
    })

    restToAdd.save((Error,response)=>{
        if(Error){
            response.send("Some Exception occured in adding restaurant")
        }
        else
        res.send({status:200,Message:"Restaurant added successfully",Restaurant:response})
    })
}


module.exports = {getRestaurants,addRestaurant}