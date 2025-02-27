import asyncWrapper from '../utils/asyncWrapper.js'
import orderModel from './../models/orderModel.js';

const listOrders = asyncWrapper(
    async (req, res) => {
        const orders = await orderModel.find({});
        res.json({ success: true, data: orders }).status(200);
    }
);

const listUserOrder = asyncWrapper(
    async (req, res) => {
        const ID = req.params.userID;
        const orders = await orderModel.find({ userID: ID });
        if (orders) {
            res.json({ success: true, data: orders }).status(200);
        } else {
            res.json({ success: false, message: 'Found No Orders' }).status(404);
        }
    }
);

const placeOrder = asyncWrapper(
    async (req, res) => {
        const user = req.user;
        const { items, amount, address, status, payment, paid } = req.body;
        const order = {
            userId: user._id,
            items,
            amount,
            address,
            status,
            payment,
            paid,
        }
        const newOrder = await orderModel.create(order);
        res.json({ success: true, data: newOrder, message: 'Order placed successfully' }).status(201);
    }
);

const updateStatus = asyncWrapper(
    async (req, res) => {
        const id = req.params.orderID;
        const order = await orderModel.findById({ _id: id });
        if (order) {
            const { status } = req.body;
            order.status = status;
            const updatedOrder = await order.save();
            res.json({ success: true, data: updatedOrder }).status(200);
        } else {
            res.status(404).json({ success: false, message: 'Order not found' });
        }
    }
)

export { listOrders, listUserOrder, placeOrder, updateStatus };