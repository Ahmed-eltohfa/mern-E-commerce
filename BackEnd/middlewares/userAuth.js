import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import asyncWrapper from "../utils/asyncWrapper.js";

const userAuth = asyncWrapper(
    async (req, res, next) => {
        const token = req.headers.authorization;
        if (token) {
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // console.log(decoded);
            req.user = await userModel.findById({ _id: decoded.id });
            // console.log(req.user);
            next();
        } else {
            res.status(401);
            throw new Error('Not authorized, no token');
        }
    }
);

export default userAuth;