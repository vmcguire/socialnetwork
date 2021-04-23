const router = require("express").Router();
const {
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
  getAllThought,
  getThoughtById,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThought);

router.route("/:id").get(getThoughtById);

router.route("/:userId").post(addThought);

router
  .route("/:userId/:thoughtId")
  .put(updateThought)
  .post(addReaction)
  .delete(removeThought);

router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
