const BlogModel = require("../Models/blogModel");

// Create a Blog
const createBlog = async(req, res, next)=>{
    const newBlog = new BlogModel(req.body);
    try{
        const savedHotel = await newBlog.save();
        res.status(200).json(savedHotel);
    }catch(err){
        next(err);
    }
}

// Update a blog
const updateBlog = async(req, res, next) =>{
    try{
        const updatedBlog = await BlogModel.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body,
            },
            {
                new:true,
            }
        );
        res.status(200).json(updatedBlog);
    }catch(err){
        next(err);
    }
}

// Delete a Blog
const deleteBlog = async(req, res, next)=>{
    try{
        await BlogModel.findByIdAndDelete(req.params.id);
        res.status(200).json("The requested Blog has been deleted");
    }catch(err){
        next(err);
    }
}

// get all the blogs
const getAllBlogs = async(req, res, next)=>{
    try{
        const allBlogs = await BlogModel.find();
        res.status(200).json(allBlogs);
    }catch(err){
        next(err);
    }
}

// Get a spefic Blog
const getBlog = async(req, res, next)=>{
    try{
        const blog = await BlogModel.findById(req.params.id);
        res.status(200).json(blog);
    }catch(err){
        next(err);
    }
}

module.exports = {createBlog, updateBlog, deleteBlog, getAllBlogs, getBlog}
