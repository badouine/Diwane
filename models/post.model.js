const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    posterId: {
      type: String,
      required: true
    },
    message: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    tel:{
      type: Number,
      required: true
    },
    picture: {
      type: String,
    },
    video: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('post', PostSchema);