const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');

router.get('/', usersController.getAllUsers);
router.post('/', usersController.createUsers);
router.delete('/:id', usersController.deleteUser);

module.exports = router;