const productModel = require('../models/produtsModel')


const add = (data) => {
    const product = new productModel(data);
    return product.save();
};

const getProducts = () => {
    const projection = { __v: 0, };
    const filter = {};
    return productModel.find(filter, projection);
}

const getProductsByBrand = (brand) => {
    const filter = { brand }
    const projection = { __v: 0 }
    return productModel.findOne(filter,projection)
}
const updateProduct = (brand,data) => {
    const {price,inStock,} = data;
    return productModel.updateOne({brand},{
        $set : {
            brand,
            price,
            inStock,
            updatedAt:Date.now()

        }
    });
};

module.exports = { add, getProducts, getProductsByBrand,updateProduct };