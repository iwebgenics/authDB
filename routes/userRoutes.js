/* routes/userRoutes.js */
const express = require("express");
const { getUserEmail } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.get("/email", authMiddleware, getUserEmail);

module.exports = router;