const express = require('express')
const router = express.Router()

const ProductsController = require('../controllers/ProductConterller')

router.get("/", (req, res) =>
    res.send("Home")
);

router.get('/products', ProductsController.getProducts)

router.get('/products/:id', ProductsController.getProductID)

router.post('/products', ProductsController.createProduct)

router.patch('/products', ProductsController.updateProduct)

router.delete('/products/:id', ProductsController.deleteProduct)

module.exports = router