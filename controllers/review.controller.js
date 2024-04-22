const Review = require("../models/Review.model");

module.exports.reviewController = {
  createReview: async (req, res) => {
    const { userId, comment, rating } = req.body;
    try {
      const review = await Review.create({ userId, comment, rating });
      res.status(201).json(review);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getReviewById: async (req, res) => {
    try {
      const review = await Review.findById(req.params.id);
      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }
      res.status(200).json(review);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllReviews: async (req, res) => {
    try {
      const reviews = await Review.find();
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteReviewById: async (req, res) => {
    try {
      const review = await Review.findByIdAndDelete(req.params.id);
      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }
      res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
