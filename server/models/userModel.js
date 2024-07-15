import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "username is Required"]
    },

    email: {
        type: String,
        required: [true, "email is Required"]
    },
    password: {
        type: String,
        required: [true, "password is Required"]
    },
    blogs: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Blog"
        }
    ]

}, { timestamps: true })
const userModel = mongoose.model("User", userSchema);

export default userModel;