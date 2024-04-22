const Dormitore = require('../models/Dormitore.model');

module.exports.dormitoreController = {

    getDormitore: async (req, res) => {
        try {
            const data = await Dormitore.find();
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    },

    createDormitore: async (req, res) => {
        try {

            const {
                title,
                description,
                image,
                rating,
            } = req.body;

            const data = await Dormitore.create({
                title,
                description,
                image,
                rating,
            }).populate("reviews");

            res.json(data);

        } catch (error) {
            res.json(error);
        }
    },

    getOneDormitory: async (req, res) => {
        try {
            const data = await Dormitore.findById(req.params.id);
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    }

}