const express = require('express');
const {getAllUsers,addUsers,getUser,updateUser,deleteUser} = require('../controllers/UserController');
//routing starts here
const router = express.Router();

router.route('/').get(getAllUsers).post(addUsers);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
