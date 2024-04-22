const Router = require("express");
const router = Router();
const { userController } = require("../controllers/user.controller");

router.post("/user", userController.registerUser);
router.post("/login", userController.login);
router.get("/user/:id", userController.getUser);
router.get("/users", userController.getUsers);
router.patch("/patch/:id", userController.patchUser);

module.exports = router;
