const express = require("express");
const controller = require("../controller/AccountController");
const router = express.Router();

const validateRequest = require("../middleware/validator");
const { postSchema } = require("../validatorSchema/account");

router.post("/create", validateRequest(postSchema), controller.create);
router.get("/resolve/:accountNumber", controller.resolve);
router.get("/fetch-all", controller.fetchAll);


module.exports = router;
