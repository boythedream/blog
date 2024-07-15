import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'

//register user
export const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        //validation

        if (!name || !email || !password) {
            return res.status(400).send({
                success: false,
                message: "Plz fill all filed"
            })
        }

        //existing user
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(500).send({
                success: false,
                message: "user already exist"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        //save new user
        const user = new userModel({ name, email, password: hashedPassword })
        await user.save();
        return res.status(200).send({
            success: true,
            message: "New user registerd successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Error while registering a user",
            success: false,
        })
    }
}


export const allUserController = async (req, res) => {
    try {
        const users = await userModel.find({})
        return res.status(200).send({
            userCount: users.length,
            success: true,
            message: "all  user get successfully",
            users
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Error while geting all users",
            success: false,
        })
    }
}

//login controller
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(500).send({
                success: false,
                message: "invalid Credentails"
            })
        }
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(501).send({
                success: false,
                message: "invalid Credentails"
            })
        }

        //password match

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(501).send({
                success: false,
                message: "invalid Credentails"
            })
        }
        return res.status(201).send({
            success: true,
            message: "User login Successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Error while login user",
            success: false,
        })
    }
}