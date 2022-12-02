const mongoose = require('mongoose');
const cities = require('./pk');
const {descriptors,places} = require('./seedHelpers');
const Campground = require('../models/campground');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/yelp-camp');
    console.log('DB Connected');
}
main().catch(err => console.log(err));

const sample = arr => arr[Math.floor(Math.random()*arr.length)];

const seedDB = async ()=>{
    await Campground.deleteMany({});
    for (let i = 0; i <= 50; i++) {
        const randomCityIndex = Math.floor(Math.random()*cities.length);
        const randomPrice = Math.floor(Math.random()*20) * 10;
        const camp = new Campground({
            title: `${sample(descriptors)} ${sample(places)}`,
            location:`${cities[randomCityIndex].city}, ${cities[randomCityIndex].admin_name}, ${cities[randomCityIndex].country}`,
            image: 'https://source.unsplash.com/collection/3571345',
            description: `It's an old quarry located out in the woods.  It's been there since as long as anyone can remember.  Some locals claim to have seen a strange creature wandering around the premises. An infamous murder happened here a long time ago.`,
            price: randomPrice,
        });
        await camp.save();
    }
};
seedDB().then(()=>{
    mongoose.connection.close()
});