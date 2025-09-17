const express = require('express');
const Auth = require('../middleware/AuthCheck');
const UserOnly = require('../middleware/UserOnly');
const AdminOnly = require('../middleware/AdminOnly');
const AuthController = require('../controllers/AuthController');
const router = express.Router();

// for welcome page 
router.get('/index', AuthController.getWelcomePage);
// for getting login page
router.get('/', AuthController.getLoginPage);

// for getting register page
router.get('/register', AuthController.getRegisterPage);

// post method for registering new user
router.post('/sign-up/create', AuthController.registerUser);

// post method for login user
router.post('/login/authenticate', AuthController.loginUser);



// get route for user logout
router.get('/logout', AuthController.logoutUser);

// get route for admin logout
router.get('/admin/logout', AuthController.logoutAdmin);

module.exports = router;