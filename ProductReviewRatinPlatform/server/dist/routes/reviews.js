"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reviewController_1 = require("../controllers/reviewController");
const router = express_1.default.Router();
router.get(":id/reviews", reviewController_1.getReviewsByProduct);
router.post(":id/reviews", reviewController_1.createReview);
router.put(":productId/reviews/:id", reviewController_1.updateReview);
router.delete(":productId/reviews/:id", reviewController_1.deleteReview);
exports.default = router;
