const router = require('express').Router();
const infoController = require('../controllers/info-controller');

router
  .route('/')
  .get(infoController.getAllWasteType)
  // .post(inventoryController.addInventory)

// router
//   .route('/:id')
//   .get(inventoryController.getOneInventory)
//   .put(inventoryController.editInventory)
//   .delete(inventoryController.deleteInventory)

module.exports = router;