"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: String,
    category: String,
    price: Number,
    dateAdded: { type: Date, default: Date.now },
    averageRating: { type: Number, default: 0 },
});
exports.default = (0, mongoose_1.model)("Product", productSchema);
