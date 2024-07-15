import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import BlogCard from '../components/BlogCard';
import axios from 'axios';

const Myblogs = () => {
    const [blogs, setBlogs] = useState([]);
    const getUserBlogs = async () => {
        try {
            const id = localStorage.getItem('userId')
            const { data } = await axios.get(`http://localhost:8080/api/v1/blog/user-blog/${id}`)
            if (data?.success) {
                setBlogs(data?.userBlog.blogs)
            }

        } catch (error) {
            toast.error(error)
        }
    }
    useEffect(() => {
        getUserBlogs()
    }, [])

    return (
        <div>
            {blogs && blogs.length > 0 ? (blogs.map((blog) =>
                <BlogCard
                    key={blog._id} // Add a unique key for each child
                    id={blog._id}
                    isUser={true}
                    title={blog.title}
                    description={blog.description}
                    image={blog.image}
                    user={blog.user.name} // Passing user object
                    time={blog.createdAt}

                />)) : ("You haven't create Blog yet")
            }
        </div>
    )
}

export default Myblogs