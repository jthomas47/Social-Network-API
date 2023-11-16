const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');


router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/friends/:reactionId').delete(removeReaction);

module.exports = router;
