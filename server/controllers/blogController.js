import mongoose from 'mongoose'
import blogModel from '../models/blogModel.js'
import userModel from '../models/userModel.js'

export const allBlogController = async (req, res) => {
    try {
        const blogs = await blogModel.find({}).populate("user")
        if (!blogs) {
            res.status(200).send({
                message: "Blogs not Found",
                success: false,
            })
        }
        res.status(200).send({
            message: "Get All user blogs successfully",
            success: true,
            blogs,

        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Something went error while getting all user blogs",
            success: false,
        })
    }
}

// create blog controllers
export const createBlogController = async (req, res) => {
    try {
        const { title, description, image, user } = req.body;
        //validation
        if (!title || !description || !image || !user) {
            res.status(500).send({
                message: "All fields are required"
            })
        }
        const existinguser = await userModel.findById(user)
        if (!existinguser) {
            res.status(404).send({
                success: false,
                message: "user not found"
            })
        }

        const newBlog = new blogModel({ title, description, image, user })
        const session = await mongoose.startSession()
        session.startTransaction();
        await newBlog.save({ session })
        existinguser.blogs.push(newBlog)
        await existinguser.save({ session })
        await session.commitTransaction()
        await newBlog.save();
        res.status(200).send({
            message: "New user blog created successfully",
            success: true,
            newBlog,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Something went error",
            success: false
        })
    }
}
export const updateBlogController = async (req, res) => {
    try {
        const { id } = req.params
        const { title, description, image } = req.body;

        const blog = await blogModel.findByIdAndUpdate(id, { ...req.body }, { new: true })
        res.status(200).send({
            success: true,
            message: "Blog update Successfylly",
            blog,
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Something went error",
            success: false
        })
    }
}
export const deleteBlogController = async (req, res) => {
    try {
        await blogModel.findByIdAndDelete(req.params.id)
        res.status(200).send({
            message: "Blog deleted successfully",
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Something went error",
            success: false
        })
    }
}
export const singleBlogController = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await blogModel.findById(id);
        if (!blog) {
            res.status(500).send({
                success: false,
                message: "Blog not found"
            })

        }

        res.status(200).send({
            success: true,
            message: "Sinlge Blog  found ",
            blog
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Something went error",
            success: false
        })
    }
}



export const userBlogController = async (req, res) => {
    try {
        const userBlog = await userModel.findById(req.params.id).populate("blogs")
        if (!userBlog) {
            return res.status(404).send({
                success: false,
                message: "Blog not found with this id"
            })
        }
        return res.status(201).send({
            success: true,
            message: "User blog",
            userBlog
        })
    } catch (error) {
        return res.status(500).send({
            success: true,
            message: "error while getiing user blogs"
        })
    }
}