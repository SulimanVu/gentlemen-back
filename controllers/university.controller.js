const University = require("../models/University.model");

module.exports.universityController = {
  createUniversity: async (req, res) => {
    try {
      const newUniversity = new University({
        ...req.body,
        access: req.params.id,
        admin: req.params.id, // Предполагается, что id администратора передается в параметрах запроса
      });
      await newUniversity.save();

      res.json(newUniversity);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getUniversity: async (req, res) => {
    try {
      const university = await University.findById(req.params.id).populate(
        "users.user admin news institute dormitory reviews"
      );
      res.json(university);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllUniversity: async (req, res) => {
    try {
      const university = await University.find(req.params.id);
      res.json(university);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  patchUniversity: async (req, res) => {
    try {
      const {
        name,
        email,
        siteUrl,
        news,
        institute,
        dormitory,
        docsImg,
        selectionCommittee,
        reviews,
      } = req.body;

      const photo = [];

      if (req.files && req.files.length > 0) {
        for (let i = 0; i < req.files.length; i++) {
          const photoPath = req.files[i].path;
          photo.push(photoPath);
        }
      }

      const updatedUniversity = await University.findByIdAndUpdate(
        req.params.id,
        {
          name,
          image: photo,
          email,
          siteUrl,
          news,
          institute,
          dormitory,
          docsImg,
          selectionCommittee,
          reviews,
        },
        { new: true }
      ).populate("news institute dormitory");

      if (!updatedUniversity) {
        return res.status(404).json({ error: "University not found" });
      }

      res.json(updatedUniversity);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  deleteUniversity: async (req, res) => {
    try {
      const data = await University.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addComment: async (req, res) => {
    try {
      const { user, comment, time } = req.body;
      const data = await University.findByIdAndUpdate(req.params.id, {
        $push: { users: { user: user, comment: comment, time: time } },
      });
      res.json(data.users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addUserToUniversity: async (req, res) => {
    try {
      const data = await University.findByIdAndUpdate(
        req.params.id,
        {
          $addToSet: { access: req.body.user },
        },
        { new: true }
      ).populate("access");

      return res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteUserUniversity: async (req, res) => {
    try {
      const data = await University.findByIdAndUpdate(
        req.params.id,
        {
          $pull: { access: req.body.user },
        },
        { new: true }
      ).populate("access");

      return res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
