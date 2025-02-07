import isEmail from "validator/lib/isEmail.js";
import asyncWrapper from "../utils/asyncWrapper.js";
import userModel from './../models/userModel.js';
import bcrypt from 'bcrypt';
import { genToken } from './../utils/token.js';

// login user controller
const loginUser = asyncWrapper(
    async (req, res) => {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "User doesn't exist" });
        } else {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ success: false, message: "Password Incorrect" });
            } else {
                const token = await genToken(user._id);
                res.status(200).json({ success: true, message: "Login successful", data: { user, token } });
            }
        }
    }
);

// register user controller
const registerUser = asyncWrapper(
    async (req, res) => {
        const { name, email, password } = req.body;
        const exists = await userModel.findOne({ email });
        if (exists) {
            // console.log(exists);
            return res.status(400).json({ success: false, message: "User already exists" });
        } else {

            if (isEmail(email) === false) {
                return res.status(400).json({ success: false, message: "Invalid email" });
            } else if (password.length < 8) {
                return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = await userModel.create({ name, email, password: hashedPassword });
            await newUser.save();

            const token = await genToken(newUser._id);
            res.status(201).json({ success: true, message: "User created successfully", data: { newUser, token } });
        }

    }
);

// admin login controller
const adminLogin = asyncWrapper(
    async (req, res) => {
        res.send("Admin login");
    }
);


export { loginUser, registerUser, adminLogin };