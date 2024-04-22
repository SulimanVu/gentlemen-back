const Router = require("express");
const router = Router();
const { taskController } = require("../controllers/task.controller");

router.post("/task", taskController.createTask);
router.get("/task/all", taskController.getAllTask);
router.get("/task/room/:id", taskController.getTaskInRoom);
router.patch("/task/solved/:id", taskController.changeTaskSolved);
router.patch("/task/update/:id", taskController.changeTask);
router.delete("/task/delete/:id", taskController.deleteTask);

module.exports = router