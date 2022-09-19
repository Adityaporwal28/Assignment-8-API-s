var citySchema = require('../models/cityModel');


getCities = (req,res)=>{
    citySchema.find((Error,response)=>{
        if(Error){
            res.send("Some exception occured in getting cities")
        }

        else
        res.send(response);
    });
}


addCity = (req,res)=>{
    const cityToAdd = new citySchema({
        location_id: req.body.location_id,
        name: req.body.name,
        city: req.body.city
    
    });
    cityToAdd.save((Error,response)=>{
        if(Error){
            res.send("Some exception occued in adding city")
        }
        else
        res.send({status:200,Message:"City added successfully",City:response})
    })

}


module.exports = {getCities,addCity}