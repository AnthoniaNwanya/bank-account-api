const express = require("express");
const controller = require("../controller/AccountController");
const router = express.Router();

const validateRequest = require("../middleware/validator");
const { postSchema, resolveSchema } = require("../validatorSchema/account");

router.post("/create", validateRequest(postSchema), controller.create);

router.post("/resolve", validateRequest(resolveSchema), controller.resolve);
router.get("/fetch-all", controller.fetchAll);


module.exports = router;
