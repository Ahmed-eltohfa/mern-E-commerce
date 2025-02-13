import express from 'express';
import { listOrders, listUserOrder, placeOrder, updateStatus } from '../controllers/orderController.js';
import userAuth from '../middlewares/userAuth.js';
import adminAuth from '../middlewares/adminAuth.js';




const orderRouter = express.Router();

orderRouter.get('/', (req, res) => { res.json('hello') });
orderRouter.get('/list', adminAuth, listOrders);
orderRouter.get('/list/:userID', userAuth, listUserOrder);
orderRouter.post('/place', userAuth, placeOrder);
orderRouter.put('/update/:orderID', adminAuth, updateStatus);

export default orderRouter;