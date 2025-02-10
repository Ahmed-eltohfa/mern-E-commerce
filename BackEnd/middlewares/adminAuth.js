import asyncWrapper from "../utils/asyncWrapper.js";
import jwt from 'jsonwebtoken';

const adminAuth = asyncWrapper(
    async (req, res, next) => {
        const token = req.headers.authorization;
        if (token) {
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (decoded.id === process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
                next();
            } else {
                res.status(401);
                throw new Error('Not authorized, not an admin');
            }
        } else {
            res.status(401);
            throw new Error('Not authorized, no token');
        }
    }
);

export default adminAuth;