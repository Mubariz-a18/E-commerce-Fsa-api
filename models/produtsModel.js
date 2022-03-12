const mongoose = require('mongoose');
const productModel = mongoose.model("product", {
    // userName: {
    //     type: String,
    //     minLength: [2, 'Minimun 2 charecters '],
    //     maxLength: [100, 'Max 100 charecters'],
    //     required: [true, 'UserName is Required']
    // },
    // email: {
    //     type:String,
    //     required:[true,"email is required"],
    //     unique:true
    // },
    // password:{type:String,required: [true, 'Password is required']},
    brand: {
        type: String,
        minLength: [2, 'Minimun 2 charecters '],
        maxLength: [100, 'Max 100 charecters'],
        required: [true, 'Brand is Required']
    },
    price: {
        type: Number
    },
    inStock: {
        type: Boolean
    },
    createdAt: Date,
    updatedAt: { type: Date, default: Date.now() }
})
module.exports = productModel