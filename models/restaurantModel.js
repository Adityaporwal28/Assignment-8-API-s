var mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    name:String,
    city:String,
    locality:String,
    min_price:Number,
    cuisine:String,
    contact:String,
    image:String
});

const resSchema = mongoose.model('restaurants',restaurantSchema);

module.exports= resSchema;