const asyncHandler = require("../middlewares/async");
const User = require("../models/UserModel");

// Lấy toàn bộ URL ảnh của tất cả user
exports.getAllImages = asyncHandler(async (req, res) => {
  const users = await User.find({}, "images"); // chỉ lấy field images
  let allImages = [];

  users.forEach(user => {
    allImages = allImages.concat(user.images);
  });

  res.json({
    success: true,
    count: allImages.length,
    images: allImages
  });
});

// 📤 Tạo user mới
exports.createUser = asyncHandler(async (req, res) => {
  const { name, email, images } = req.body;

  // Kiểm tra dữ liệu cơ bản
  if (!name || !email) {
    return res.status(400).json({ success: false, message: "Missing name or email" });
  }

  const newUser = await User.create({
    name,
    email,
    images: images || [] // mảng URL ảnh (nếu có)
  });

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: newUser
  });
});