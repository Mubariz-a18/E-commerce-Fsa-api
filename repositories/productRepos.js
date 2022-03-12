const productModel = require('../models/produtsModel')

const add = (data) => {
    const product = new productModel(data);
    return product.save();
};    
const getProducts = (pageIndex, pageSize) => {
    const projection = { __v: 0, password: 0 };
    const skipRows = pageIndex * pageSize;
    return productModel.find(projection)
        .skip(skipRows)
        .limit(pageSize);
}


const getProductCount = () => {
     const filter = {};
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


module.exports = { add,
     getProducts, 
     getProductsByBrand, 
     updateProduct,
      getProductCount
     };