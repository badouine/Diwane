const UserModel = require('../models/user.model');
const PostModel = require('../models/post.model');
const ObjectID  = require('mongoose').Types.ObjectId;

module.exports.readPost= (req, res) => {
    PostModel.find((err, docs) => {
        if(!err) res.send(docs);
            else console.log('error to get data : ' + err);
    }).sort({ createdAt: -1 });
};

module.exports.createPost = async (req, res) => {
    const newPost = new PostModel({
        posterId: req.body.posterId,
        message: req.body.message,
        video: req.body.video
    });

    try {
        const post = await newPost.save();
            return res.status(201).json(post);
    }catch (err) {
        return res.status(400).send(err);
    }
};


module.exports.updatePost = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID Unknown:" + req.params.id);
  
    const updatedRecord = {
      message: req.body.message,
    };
  
    PostModel.findByIdAndUpdate(
      req.params.id,
      { $set: updatedRecord },
      { new: true },
      (err, docs) => {  
        if (!err) res.send(docs);
        else console.log("update error:" + err);
      }
    );
  };


module.exports.deletePost = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID Unknown:" + req.params.id);
  
    postModel.findByIdAndRemove(req.params.id, (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Delete error:" + err);
    });
  };