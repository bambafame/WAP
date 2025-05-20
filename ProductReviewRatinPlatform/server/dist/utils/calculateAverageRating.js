"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Review_1 = __importDefault(require("../models/Review"));
const Product_1 = __importDefault(require("../models/Product"));
const calculateAverageRating = async (productId) => {
    const reviews = await Review_1.default.find({ productId });
    const total = reviews.reduce((sum, r) => sum + r.rating, 0);
    const average = reviews.length ? total / reviews.length : 0;
    await Product_1.default.findByIdAndUpdate(productId, { averageRating: average });
};
exports.default = calculateAverageRating;
