import express from 'express';
import { getAllProducts, getProductById, addProduct, deleteProduct, updateProduct } from '../controllers/productController.js';
import upload from '../middlewares/multer.js';


const productRouter = express.Router();

productRouter.get('/list', getAllProducts);
productRouter.get('/list/:id', getProductById);
productRouter.post('/add',
    upload.fields([
        { name: 'image1', maxCount: 1 },
        { name: 'image2', maxCount: 1 },
        { name: 'image3', maxCount: 1 },
        { name: 'image4', maxCount: 1 },
    ]),
    addProduct);
productRouter.delete('/delete/:id', deleteProduct);
productRouter.put('/update/:id', updateProduct);

export default productRouter;