"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProducts = exports.getAllProducts = void 0;
const Product_1 = __importDefault(require("../models/Product"));
const getAllProducts = async (req, res) => {
    try {
        const { page = 1, category } = req.query;
        const query = category ? { category } : {};
        const products = await Product_1.default.find(query)
            .sort({ dateAdded: -1 })
            .skip((+page - 1) * 10)
            .limit(10);
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetch products" });
    }
};
exports.getAllProducts = getAllProducts;
const searchProducts = async (req, res) => {
    try {
        const q = req.query.q;
        const results = await Product_1.default.find({ name: new RegExp(q, "i") });
        res.status(200).json(results);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to search products" });
    }
};
exports.searchProducts = searchProducts;
