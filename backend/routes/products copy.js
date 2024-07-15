const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET recommended products based on user preferences or history
router.get('/recommendations', async (req, res) => {
  try {
    // Get user preferences from cookies
    const preferences = req.cookies.preferences; // Assuming preferences are stored in cookies

    if (!preferences) {
      return res.status(400).json({ message: 'No user preferences found in cookies' });
    }

    // Fetch products based on user preferences (example: keyword matching)
    const recommendedProducts = await Product.find({
      keywords: { $in: preferences }
    });

    res.json(recommendedProducts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
