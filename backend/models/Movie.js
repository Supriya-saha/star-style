const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  keywords: {
    type: Array,
    required: true,
  },
  actors: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('Movie', MovieSchema);
