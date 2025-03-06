/* controllers/userController.js */
exports.getUserEmail = (req, res) => {
    res.json({ email: req.user.email });
  };