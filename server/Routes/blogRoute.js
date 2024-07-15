import express from 'express'
import { allBlogController, createBlogController, deleteBlogController, singleBlogController, updateBlogController, userBlogController } from '../controllers/blogController.js';


const router = express.Router();
//get all user blogs
router.get('/all-blog', allBlogController)
//create user blog
router.post('/create-blog', createBlogController)
//Update user blog
router.put('/update-blog/:id', updateBlogController)
//delete user blog
router.delete('/delete-blog/:id', deleteBlogController)
//single get user blog
router.get('/single-blog/:id', singleBlogController)
router.get('/user-blog/:id', userBlogController)

export default router;