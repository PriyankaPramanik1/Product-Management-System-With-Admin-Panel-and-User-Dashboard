const express = require('express');
const Auth = require('../middleware/AuthCheck');
const AdminOnly = require('../middleware/AdminOnly');

const AuthController = require('../controllers/AuthController');
const AdminController = require('../controllers/AdminController');
const router = express.Router();

// get method for admin dashboard create category page
router.get('/admin-dashboard/category', Auth, AdminOnly, AuthController.checkAuth, AdminController.getCategoryPage);

// post method for create category page
router.post('/create-category', Auth, AdminOnly, AuthController.checkAuth, AdminController.createCategory);

// Edit category
router.post("/edit-category/:id", Auth, AdminOnly, AuthController.checkAuth, AdminController.editCategory);

// delete category
router.get('/delete-category/:id', Auth, AdminOnly, AuthController.checkAuth, AdminController.deleteCategory);

// get method for admin dashboard create product page
router.get('/admin-dashboard/create-product', Auth, AdminOnly, AuthController.checkAuth, AdminController.getCreateProductPage);

// post method for admin dashboard create product
router.post('/create-product', Auth, AdminOnly, AuthController.checkAuth, AdminController.createProduct);

// get method for admin dashboard all products page
router.get('/admin-dashboard', Auth, AdminOnly, AuthController.checkAuth, AdminController.getAdminDashboardPage);

// get method for admin dashboard edit product page
router.get('/admin-dashboard/edit-product/:id', Auth, AdminOnly, AuthController.checkAuth, AdminController.getEditProductPage);

// post method for admin dashboard update product
router.post('/products/update/:id', Auth, AdminOnly,AuthController.checkAuth, AdminController.updateProduct);

// get method for admin dashboard delete product
router.get('/admin-dashboard/delete-product/:id', Auth, AdminOnly, AuthController.checkAuth, AdminController.deleteProduct);


module.exports = router;