const { Router } = require("express");
const { GetAuthPage, Auth } = require("../controllers/authController");
const router = Router();
const {protected,guest} = require("../middlewares/auth")
router.get("/login",GetAuthPage);
router.post("/login",Auth);
module.exports = router;