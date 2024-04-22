const UniversityNews = require("../models/UniversityNews.model");

module.exports.universityNewsController = {
   getOneNews: async (req, res) => {
      try {
         const data = await UniversityNews.findById(req.params.id)
         res.json(data);
      } catch (error) {
         return res.status(404).json(error.toString());
      }
   },

   getNews: async (req, res) => {
      try {
         const data = await UniversityNews.find();
         res.json(data);
      } catch (error) {
         return res.status(404).json(error.toString());
      }
   },

   createNews: async (req, res) => {
      try {
         const { title, description } = req.body;
         const photo = [];

         if (req.files && req.files.length > 0) {
            for (let i = 0; i < req.files.length; i++) {
               const photoPath = req.files[i].path;
               photo.push(photoPath);
            }
         }

         const news = await UniversityNews.create({
            title,
            description,
            image: photo,
         });

         const data = await news.populate("reviews");
         res.json(data);
      } catch (error) {
         return res.status(400).json({ error: error.toString() });
      }
   },

   updateNews: async (req, res) => {
      const { title, description } = req.body;
      try {
         const photo = req.files && req.files[0] ? req.files[0].path : "";

         const data = await UniversityNews.findByIdAndUpdate(
            req.params.id,
            {
               image: photo,
               title,
               description,
            },
            { new: true }
         ).populate("reviews");

         res.json(data);
      } catch (error) {
         return res.status(404).json(error.toString());
      }
   },

   deleteNews: async (req, res) => {
      try {
         const data = await UniversityNews.findByIdAndDelete(req.params.id);
         res.json(data);
      } catch (error) {
         return res.status(404).json(error.toString());
      }
   },
};
