const Router = require('express');
const router = Router();
const { instituteController } = require('../controllers/institute.controller')
const createMulter = require("../middleware/image.middleware");
const instituteUpload = createMulter("institute");

router.post('/institute',instituteUpload.array('image'),  instituteController.createInstitute);
router.get('/institute', instituteController.getInstitutes);

module.exports = router;