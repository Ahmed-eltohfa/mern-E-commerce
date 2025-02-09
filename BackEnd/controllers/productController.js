import asyncWrapper from "../utils/asyncWrapper.js";
import productModel from './../models/productModel.js';
import { v2 as cloudinary } from 'cloudinary';


const addProduct = asyncWrapper(
    async (req, res) => {
        const { name, price, description, category, subCategory, sizes, bestSeller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];
        let images = [image1, image2, image3, image4];
        images = images.filter(image => image !== undefined);

        let imagesUrl = await Promise.all(
            images.map(async (image) => {
                const result = await cloudinary.uploader.upload(image.path, { resource_type: 'image' });
                return result.secure_url;
            })
        );

        const product = {
            name,
            description,
            price,
            image: imagesUrl,
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestSeller,
        };

        const newProduct = await productModel.create(product);
        res.json({ success: true, message: 'Product added', product: newProduct }).status(201);
    }
);

const getAllProducts = asyncWrapper(
    async (req, res) => {
        const products = await productModel.find({});
        res.json({ success: true, data: products }).status(200);
    }
);

const getProductById = asyncWrapper(
    async (req, res) => {
        const ID = req.params.id;

        const product = await productModel.findById({ _id: ID });
        if (product) {
            res.json({ success: true, data: product }).status(200);
        } else {
            res.status(404);
            throw new Error('Product not found');
        }
    }
);

const updateProduct = asyncWrapper(
    async (req, res) => {
        const { name, price, description, category, subCategory, sizes, bestSeller } = req.body;
        const ID = req.params.id;
        let product = await productModel.findById({ _id: ID });
        if (product) {
            const newProduct = {
                name: name || product.name,
                description: description || product.description,
                price: price || product.price,
                category: category || product.category,
                subCategory: subCategory || product.subCategory,
                sizes: sizes || product.sizes,
                bestSeller: bestSeller || product.bestSeller,
            }

            product = await productModel.findByIdAndUpdate({ _id: ID }, newProduct, { new: true });

            res.json({ success: true, message: 'product updated', data: product }).status(200);
        } else {
            res.status(404);
            throw new Error('Product not found');
        }
    }
);

const deleteProduct = asyncWrapper(
    async (req, res) => {
        const ID = req.params.id;
        const product = await productModel.findById({ _id: ID });
        if (product) {
            await productModel.deleteOne({ _id: ID });
            res.json({ success: true, message: 'Product removed' }).status(200);
        } else {
            res.status(404);
            throw new Error('Product not found');
        }
    }
);

export { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct };