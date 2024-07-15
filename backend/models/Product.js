const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  keywords: [{ type: String }], // Array of keywords
  price: { type: Number, required: true },
  // Add other fields as needed
});

module.exports = mongoose.model('Product', productSchema);