const express = require('express');
const multer = require('multer');
const fs = require('fs');
const productCtrl = require('../controllers/productCtrl');
const router = express.Router();

const dir = './uploads';
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
        const uniqueToken = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileName = uniqueToken + '-' + file.originalname;
        req.resume = fileName;
        cb(null, fileName);
    }
});

const upload = multer({ storage: storage });

router.post('/register', productCtrl.register);
router.put('/update/:_id',productCtrl.updateProduct)
router.put('/:_id', upload.single('image'), productCtrl.updateProduct);
router.get('/page/:page/size/:size/',productCtrl.getProducts)
router.get('/', productCtrl.getProducts);
router.get('/:brand',productCtrl.getProductsByBrand)

module.exports = router;