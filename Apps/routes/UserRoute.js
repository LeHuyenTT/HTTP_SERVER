const express = require("express");
const router = express.Router();
const { createUser, getAllImages } = require("../controllers/UserController");

// API: Lấy tất cả ảnh của mọi user
router.get("/images/all", getAllImages);
router.post("/", createUser);

module.exports = router;
