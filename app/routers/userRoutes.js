const express = require('express');
const Auth = require('../middleware/AuthCheck');

const UserController = require('../controllers/UserController');
const UserOnly = require('../middleware/UserOnly');
const AuthController = require('../controllers/AuthController');
const router = express.Router();

// get method for user dashboard
// get method for user dashboard and product sorting category wise
router.get('/user-dashboard', Auth, UserOnly, AuthController.checkAuth,UserController.getUserDashboardPageAndAllProducts);


module.exports = router;