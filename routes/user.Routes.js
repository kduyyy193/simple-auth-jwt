const express = require('express');
const { signUp, login, getAllUsers } = require('../controller/userController');
const router = express.Router();
const { verifyToken } = require('../config/isAuth');

router.post('/signup', signUp);
router.post('/login', login);
router.get('/getAllUsers', verifyToken, getAllUsers);

module.exports = router;