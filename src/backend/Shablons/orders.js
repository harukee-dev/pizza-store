const { Schema, model } = require('mongoose');


const Orders = new Schema({
    deliveryDate: { deliveryDate: Date, required: true },
    dishes: [{dishes: String, required: true}],
    username: { username: String, required: true },
    addvess: { addvess: String, required: true },
})

module.exports = model('Orders', Orders);