const router = require('express').Router();
const recordsController = require('../controllers/records-controller');

router
  .route('/')
  .get(recordsController.getAllRecords)
  .post(recordsController.addRecord)

router
  .route('/:id')


module.exports = router;