const express = require('express')
const Product = require("../models/product.model.js");
const router = express.Router();

const { getProducts, getProduct, createProduct, updatedProduct, deleteProduct } = require('../controllers/product.controller.js')

router.get('/', getProducts);

router.get('/:id', getProduct);

router.post('/', createProduct);

//update product
router.put('/:id', updatedProduct)

//delete product 
router.delete('/:id', deleteProduct)

module.exports = router;


