const User = require('../models/user.model');

const getAllUsers = async (req,res, next)=>{
    try{
        const allUsers = await User.find().select('-password');
        return res.status(200).json(allUsers);
    }catch(error){
        return next(error);
    }
};

const createUsers = async (req,res, next)=>{
    try{
        const newUser =new User({ ...req.body });
        const insertedUser = await newUser.save();
        const returnUser = insertedUser.toObject();
        delete returnUser.password;
        return res.status(201).send(returnUser);
    }catch(error){
        return next(error);
    }
};

const deleteUser = async (req,res,next)=>{
    try{
        const id = req.params.id;
        await User.findByIdAndDelete(id);
        return res.status(204).send();
    }catch(error){
        return next(error);
    }
};
 
module.exports = { getAllUsers, createUsers, deleteUser};