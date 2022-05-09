const UserModel = require('../models/user.model');

module.exports.signUp = async (req, res) => {
    const {email, password,tel} = req.body;

    try {
        const user = await UserModel.create({ email, password,tel});
        res.status(201).json({ user: user._id});
    }
    catch (err) {
        res.status(200).send({ err });
    }
}