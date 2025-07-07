const { Schema, model } = require('mongoose');


const Dish = new Schema({
    name: { name: String, required: true },
    type: {
        type: String,
        enum: ['pizza', 'burger', 'drinks', 'desserts'],
        required: true,
    },
    discription: { discription: String, required: true },
    price: { price: Number, required: true },
    diliveryTime: { deliveryTime: Number, required: true },
    discount: { discount: Number, required: true },
    rate: { rate: Number, required: true },
    image: { image: String, required: true },

})
module.exports = model('Dish', Dish);