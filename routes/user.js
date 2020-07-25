const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.get('/user', userController.getAllUsers);

module.exports = router;
