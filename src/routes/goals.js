const router = require('express').Router();
const goalsController = require('../controllers/goals-controller');

router
  .route('/')
  .get(goalsController.getAllGoals)
  .post(goalsController.addGoal)

router
  .route('/:id')
  .get(goalsController.getGoal)
//   .put(goalsController.editGoal)


module.exports = router;