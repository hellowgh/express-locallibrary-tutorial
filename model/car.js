const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    color: String,
    price: {
        type: Number,
        min: 0,
        max: 100000,
        required: [true, 'price is required']
    }
})

const Car = mongoose.model('car', carSchema);

module.exports = Car;