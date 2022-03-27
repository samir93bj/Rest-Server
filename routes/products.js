const Router = require('express');

const {
    getProducts,
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
    } = require('../controllers/products');

const router = new Router();

//ROUTE GET - PRODUCTS
router.get('/', [

],  getProducts);

//ROUTE 
router.get('/:id',[

],getProduct);

//ROUTE POST
router.post('/',[

], postProduct);

//ROUTE DELETE
router.delete('/:id',[

],deleteProduct);

//ROUTE PUT
router.put('/:id',[

],putProduct);

module.exports = router;