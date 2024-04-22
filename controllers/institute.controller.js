const Institute = require("../models/Institute.model");

module.exports.instituteController = {
  getInstitutes: async (req, res) => {
    try {
      const data = await Institute.find().populate("reviews");

      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  createInstitute: async (req, res) => {
    try {
      const {
        id,
        title,
        description,
      } = req.body;

      const image = req.files && req.files[0] ? req.files[0].path : "";

      const institute = await Institute.create({
        id,
        title,
        description,
        image
      });

      const data = await institute.populate("reviews");

      res.json(data);
    } catch (error) {
      return res.status(400).json({ error: error.toString() });
    }
  }
};