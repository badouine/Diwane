const UserModel = require('../models/user.model');
const PostModel = require('../models/post.model');
const ObjectID  = require('mongoose').Types.ObjectId;
const { uploadErrors } = require('../utils/errors.utils');
const { promisify } = require('util');
const pipeline = promisify(require('stream').pipeline);
const fs = require('fs');

module.exports.readPost= (req, res) => {
    PostModel.find((err, docs) => {
        if(!err) res.send(docs);
            else console.log('error to get data : ' + err);
    }).sort({ createdAt: -1 });
};

module.exports.createPost = async (req, res) => {

  let fileName;


  if(req.file !== null){
    try{
      if( 
          req.file.detectedMimeType !== "image/jpg" &&
          req.file.detectedMimeType !== "image/png" &&
          req.file.detectedMimeType !== "image/jpeg" &&
          req.file.detectedMimeType !== "image/heic"
      )
      throw  Error('invalid file');
          if(req.file.size > 500000) throw Error('max size');
  } catch (err) {
      const errors = uploadErrors(err)
      return res.status(201).json({errors});
  }
    fileName = req.body.posterId + Date.now() + '.jpg';

        
    await pipeline(
      req.file.stream,
      fs.createWriteStream(
          `${__dirname}/../client/public/uploads/posts/${fileName}`
      )
  );
  }

    const newPost = new PostModel({
        posterId: req.body.posterId,
        tel: req.body.tel,
        picture: req.file !== null ? "./uploads/posts/" + fileName : "",
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
      tel: req.body.tel,
      message: req.body.message
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