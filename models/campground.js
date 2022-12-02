const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title: {
        type:String,
        required: [true, 'title is required']
    },
    image:{
        type:String,
        required: [true, 'image source is required']
    },
    price: {
        type:Number,
        required: [true, 'price is required']
    },
    description: {
        type:String,
        required: [true, 'description is required']
    },
    location: {
        type:String,
        required: [true, 'location is required']
    }
});

module.exports = mongoose.model('Campground', CampgroundSchema);