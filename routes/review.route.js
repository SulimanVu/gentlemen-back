const express = require('express');
const router = express.Router();
const { reviewController } = require('../controllers/review.controller');

router.post('/review/', reviewController.createReview);
router.get('/review/:id', reviewController.getReviewById);
router.get('/review', reviewController.getAllReviews);
router.delete('/review/:id', reviewController.deleteReviewById);

module.exports = router;
