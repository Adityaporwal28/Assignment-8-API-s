var mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    location_id: String,
    name: String,
    city: String
});

const city = mongoose.model('city',citySchema);

module.exports = city;