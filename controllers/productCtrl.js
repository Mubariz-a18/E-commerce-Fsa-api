const e = require('express');
const productRepository = require('../repositories/productRepos')


const register = async (req, res) => {
    try {
        const data = req.body;
        console.log(data)
        data.createdAt = Date.now();
        await productRepository.add(data);
        res.status(201);
        res.send();
    } catch (e) {
        console.log(e)
        res.status(500);
        res.json("unable to add")
    };
}

const getProducts = async (req, res) => {
    try {
        const products = await productRepository.getProducts();

        res.status(200);
        res.json(products);
    } catch (e) {
        console.log(e)
        res.status(500).json('Internal Server Error');
    }
}

const updateProduct = async (req, res) => {
    try {
        const _id = req.params._id;
        await productRepository.updateProduct(_id, req.body);

        res.status(204);
        res.send();
    } catch (e) {
        res.status(500).send('Internal Server Error');
        console.log(e)
    }
}

// const updateProduct = async (req,res) => {
//     productRepository.updateProduct(req.params.brand)
//     .then(product => res.status(200).json((product))
//     .catch(err => res.status(500).json("internal server error"))
//     )
// }

const getProductsByBrand = (req, res) => {
    productRepository.getProductsByBrand(req.params.brand)
        .then(product => res.status(200).json(product))
        .catch(err => res.status(500).send('internal server error'))
}



module.exports = { register, getProducts, getProductsByBrand, updateProduct }