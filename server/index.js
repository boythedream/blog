import express from 'express';
import cors from 'cors';
import colors from 'colors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import userRoutes from './Routes/userRoute.js'
import blogRoutes from './Routes/blogRoute.js'

dotenv.config();

const PORT = process.env.PORT || 8080;

//rest objects 
const app = express();


//database connection
connectDb();

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/blog', blogRoutes)

app.listen(PORT, () => {
    console.log(`server running on ${process.env.DEV_MODE} port ${PORT}`.bgCyan.white);
})