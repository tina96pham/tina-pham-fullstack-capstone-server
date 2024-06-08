const router = require('express').Router();
const productsController = require('../controllers/products-controller');

router
  .route('/')
  .get(productsController.getAllProducts)

router
  .route('/:id')
  .get(productsController.getOneProduct)


module.exports = router;