const router = require('express').Router();
const goalsController = require('../controllers/goals-controller');

router
  .route('/')
  .get(goalsController.getGoal)
  // .post(goalsController.addGoals)

router
  .route('/:id')
  .get(goalsController.getGoal)
//   .put(productsController.editInventory)
//   .delete(productsController.deleteInventory)

module.exports = router;