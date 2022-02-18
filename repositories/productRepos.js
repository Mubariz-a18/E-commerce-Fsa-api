const productModel = require('../models/produtsModel')


const add = (data) => {
    const product = new productModel(data);
    return product.save();
};

const getProducts = () => {
    const projection = { __v: 0, };
    // const { brand, price, inStock } = options;
    const filter = {};
    return productModel.find(filter, projection);
}

const getProductsByBrand = (brand) => {
    const filter = { brand }
    const projection = { __v: 0 }
    return productModel.findOne(filter, projection)
}
const updateProduct = (_id, data) => {
    const { brand,price, inStock, } = data;
    return productModel.updateOne({_id }, {
        $set: {
            brand,
            price,
            inStock,
            updatedAt: Date.now()

        }
    });
};

module.exports = { add, getProducts, getProductsByBrand, updateProduct };