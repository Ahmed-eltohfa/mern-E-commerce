import express from 'express';
import { getAllProducts, getProductById, addProduct, deleteProduct, updateProduct } from '../controllers/productController.js';
import upload from '../middlewares/multer.js';
import userAuth from '../middlewares/userAuth.js';
import adminAuth from '../middlewares/adminAuth.js';

const productRouter = express.Router();

productRouter.get('/list', userAuth, getAllProducts);
productRouter.get('/list/:id', userAuth, getProductById);
productRouter.post('/add', adminAuth,
    upload.fields([
        { name: 'image1', maxCount: 1 },
        { name: 'image2', maxCount: 1 },
        { name: 'image3', maxCount: 1 },
        { name: 'image4', maxCount: 1 },
    ]),
    addProduct);
productRouter.delete('/delete/:id', adminAuth, deleteProduct);
productRouter.put('/update/:id', adminAuth, updateProduct);

export default productRouter;