"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReview = exports.updateReview = exports.createReview = exports.getReviewsByProduct = void 0;
const Review_1 = __importDefault(require("../models/Review"));
const calculateAverageRating_1 = __importDefault(require("../utils/calculateAverageRating"));
const getReviewsByProduct = async (req, res) => {
    try {
        const reviews = await Review_1.default.find({ productId: req.params.id });
        res.status(200).json(reviews);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetch reviews" });
    }
};
exports.getReviewsByProduct = getReviewsByProduct;
const createReview = async (req, res) => {
    try {
        const { author, rating, comment } = req.body;
        const review = await Review_1.default.create({
            productId: req.params.id,
            author,
            rating,
            comment,
        });
        await (0, calculateAverageRating_1.default)(req.params.id);
        res.status(201).json(review);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to create review" });
    }
};
exports.createReview = createReview;
const updateReview = async (req, res) => {
    try {
        const updated = await Review_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        await (0, calculateAverageRating_1.default)(req.params.productId);
        res.status(200).json(updated);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to update review" });
    }
};
exports.updateReview = updateReview;
const deleteReview = async (req, res) => {
    try {
        await Review_1.default.findByIdAndDelete(req.params.id);
        await (0, calculateAverageRating_1.default)(req.params.productId);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ message: "Failed to delete review" });
    }
};
exports.deleteReview = deleteReview;
