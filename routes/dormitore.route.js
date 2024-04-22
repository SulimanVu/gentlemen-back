const Router = require('express');
const router = Router();
const { dormitoreController } = require('../controllers/dormitore.controller');

router.get('/dormitore', dormitoreController.getDormitore);
router.post('/addDorm', dormitoreController.createDormitore);
router.get('/dormitore/:id', dormitoreController.getOneDormitory);

module.exports = router;