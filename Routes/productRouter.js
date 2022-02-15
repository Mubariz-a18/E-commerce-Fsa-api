const express = require('express');
const productCtrl = require('../controllers/productCtrl');
// const updateProduct = require('../repositories/productRepos');
const router = express.Router();

router.post('/register', productCtrl.register);
router.put('/update/:brand',productCtrl.updateProduct)
router.get('/', productCtrl.getProducts);
router.get('/:brand',productCtrl.getProductsByBrand)

module.exports = router;