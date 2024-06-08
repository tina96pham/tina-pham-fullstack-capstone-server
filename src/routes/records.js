const router = require('express').Router();
const recordsController = require('../controllers/records-controller');

router
  .route('/')
  .get(recordsController.getAllRecords)
  // .post(inventoryController.addInventory)

router
  .route('/:id')
//   .get(inventoryController.getOneInventory)
//   .put(inventoryController.editInventory)
//   .delete(inventoryController.deleteInventory)

module.exports = router;