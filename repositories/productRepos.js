const productModel = require('../models/produtsModel')

const alredyExist = (e) => e.message && e.message.indexOf('duplicate key') > -1

const add = (data) => {
    const product = new productModel(data);
    return product.save();
};

const getProducts = (pageIndex, pageSize) => {
    const projection = { __v: 0, };
    const filter = {};
    const skipRows = pageIndex*pageSize;
    return productModel.find(filter, projection)
    .skip(skipRows).limit(pageSize);
}

const getProductCount = () => {
    return productModel.count();
}


const getProductsByBrand = (brand) => {
    const filter = { brand }
    const projection = { __v: 0 }
    return productModel.findOne(filter, projection)
}
const updateProduct = (_id, data) => {
    const { brand, price, inStock, } = data;
    return productModel.updateOne({ _id }, {
        $set: {
            _id: productModel._id,
            brand,
            price,
            inStock,
            updatedAt: Date.now()

        }
    });
};

module.exports = { add, getProducts, getProductsByBrand, updateProduct ,getProductCount};