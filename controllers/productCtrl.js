const e = require('express');
const productRepository = require('../repositories/productRepos')

const alreadyExists = (e) => e.message && e.message.indexOf('duplicate key') > -1

const hasErrors = (e) => e._message === 'user validation failed'

const handleErrors = (e, res) => {
    if (alreadyExists(e))
        res.status(409).send('User already exists');
    else if (hasErrors(e))
        res.status(400).json(e.errors);
    else
        res.status(500).send('Internal Server Error');
}

const register = async (req, res) => {
    try {
        const data = req.body;
        console.log(data)
        data.createdAt = Date.now();
        await productRepository.add(data);
        res.status(201);
        res.send();
    } catch (e) {
        handleErrors(e, res);
    };
}

const getProducts = async (req, res) => {
    try {
        const pageIndex = +req.params.page ;
        const pageSize = +req.params.size ;
        const totalCount = await productRepository.getProductCount();
        const totalPages = Math.ceil(totalCount / pageSize);
        const products = await productRepository.getProducts(pageIndex, pageSize);
        const response = {
            data: products,
            metaData: {
                totalCount, totalPages
            }
        }


        res.status(200);
        res.json(response);
        console.log(response.data)

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