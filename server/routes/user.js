const mongoose=require('mongoose');
const express=require('express');
const {User,Posts}=require("../db/index.js");
const jwt=require("jsonwebtoken");
const {authenticateJwt,SECRET}=require("../middleware/auth.js");
const router=express.Router();
router.post('/signup',async(req,res)=>{
    const {username,password}=req.body;
    const user=await User.findOne({username});
    if(user){
        res.status(403).json({message:'User already exists'});
    }
    else {
        const newUser=new User({username,password});
        await newUser.save();
        const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'User created successfully', token });
    }
});
router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
      const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });
  router.post('/posts',authenticateJwt,async(req,res)=>{
          const Post= new Posts(req.body);
          await Post.save();
          res.json({message: 'Post added succesfully'})
  });
  router.get('/posts', authenticateJwt, async (req, res) => {
    const posts = await Posts.find({});
    res.json({ posts });
});
  
module.exports=router                                                   
