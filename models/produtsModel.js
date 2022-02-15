const mongoose = require('mongoose');
const productModel = mongoose.model("product", {
    brand: {
        type: String,
        minLength: [2, 'Minimun 2 charecters '],
        maxLength: [100, 'Max 100 charecters'],
        required: [true, 'Brand is Required']
    },
    price: {
        type: String
    },
    inStock: {
        type: Boolean
    },
    createdAt: Date,
    updatedAt: { type: Date, default: Date.now() }
})
module.exports = productModel