import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "title is Required"]
        },

        description: {
            type: String,
            required: [true, "description is Required"]
        },
        image: {
            type: String,
            required: [true, "image is Required"]
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: [true, "user id is required"]
        }

    }, { timestamps: true })
const blogModel = mongoose.model("Blog", blogSchema);

export default blogModel;