const router = require('express').Router();
const productsController = require('../controllers/products-controller');

router
  .route('/')
  .get(productsController.getAllProducts)
  // .post(productsController.addInventory)

// router
//   .route('/:id')
//   .get(productsController.getOneInventory)
//   .put(productsController.editInventory)
//   .delete(productsController.deleteInventory)

module.exports = router;