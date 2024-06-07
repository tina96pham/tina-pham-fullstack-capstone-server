const router = require('express').Router();
const wastelogController = require('../controllers/wastelog-controller');

router
  .route('/')
  .get(wastelogController.getWasteRecord)
  // .post(inventoryController.addInventory)

// router
//   .route('/:id')
//   .get(inventoryController.getOneInventory)
//   .put(inventoryController.editInventory)
//   .delete(inventoryController.deleteInventory)

module.exports = router;