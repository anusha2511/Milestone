const express = require('express');
const router = express.Router();
const orderController = require('../Controllers/orderController');
const authMiddleware = require('../Middleware/authMiddleware');

// Routes for orders
router.post('/', authMiddleware.authenticate, orderController.placeOrder);
router.get('/user', authMiddleware.authenticate, orderController.getOrdersByUser);
router.get('/admin', authMiddleware.authenticate, authMiddleware.isAdmin, orderController.getAllOrders);
router.put('/:id', authMiddleware.authenticate, authMiddleware.isAdmin, orderController.updateOrderStatus);

module.exports = router;
