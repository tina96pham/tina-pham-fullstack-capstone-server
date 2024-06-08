const router = require('express').Router();
const wastesController = require('../controllers/wastes-controller');

router
  .route('/')
  .get(wastesController.getAllWastes)
  // .post(inventoryController.addInventory)

// router
//   .route('/:id')
//   .get(inventoryController.getOneInventory)
//   .put(inventoryController.editInventory)
//   .delete(inventoryController.deleteInventory)

module.exports = router;