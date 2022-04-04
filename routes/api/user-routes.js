const router = require('express').Router();
//
const {
  getUsers,
  getSingleUser,
  createUser,
  addThought,
  removeThought,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
  
} = require('../../controllers/user-controller');

// /api/users
// this route is used to get all users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
// This route is used to get a single user by id
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
// this route is used to add a friend to a user
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

router
    .route('/:userId/editFriends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

// /api/users/:userId/thoughts
router.route('/:userId/thoughts').post(addThought);

// /api/users/:userId/thoughts/:thoughtId
router.route('/:userId/thoughts/:thoughtId').delete(removeThought);


module.exports = router;