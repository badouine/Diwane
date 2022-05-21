const UserModel = require('../models/user.model');
const fs = require('fs');
const {uploadErrors} = require('../utils/errors.utils');
const { promisify } = require('util');
const pipeline = promisify(require('stream').pipeline);


module.exports.uploadProfil = async(req, res) => {
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
        return res.status(201).json(err);
    }

    const fileName = req.body.name + ".jpg";
    await pipeline(
        req.file.stream,
        fs.createWriteStream(
            `${__dirname}/../client/public/uploads/profil/${fileName}`
        )
    )
};