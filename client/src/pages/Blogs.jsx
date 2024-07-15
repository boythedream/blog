import axios from 'axios'
import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import BlogCard from '../components/BlogCard'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    //get all blogs
    const getAllBlogs = async () => {
        try {
            const { data } = await axios.get('http://localhost:8080/api/v1/blog/all-blog')
            if (data?.success) {
                setBlogs(data.blogs)
            }
        } catch (error) {
            toast.error(error)
        }
    }
    useEffect(() => {
        getAllBlogs()
    }, [])

    return (
        <>
            {blogs && blogs.map((blog) =>
                <BlogCard
                    key={blog._id} // Add a unique key for each child
                    id={blog._id}
                    isUser={localStorage.getItem('userId') === blog?.user?._id}
                    title={blog?.title}
                    description={blog?.description}
                    image={blog?.image}
                    user={blog?.user.name} // Passing user object
                    time={blog?.createdAt}
                />
            )}
        </>
    )
}

export default Blogs