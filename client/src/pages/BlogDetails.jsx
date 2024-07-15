import axios from 'axios';
import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom'
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
const BlogDetails = () => {
    const [blog, setBlog] = useState({})
    const id = useParams().id;
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        image: "",
    })
    const getBlogDetails = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8080/api/v1/blog/single-blog/${id}`)
            if (data?.success) {
                setBlog(data?.blog)
                setInputs({
                    title: data?.blog.title,
                    description: data?.blog.description,
                    image: data?.blog.image,
                })
            }
        } catch (error) {
            toast.error(error)
        }
    }
    useEffect(() => {
        if (data?.blog) getBlogDetails()

    }, [data?.blog])

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.put(`http://localhost:8080/api/v1/blog/update-blog/${id}`, {
                title: inputs.title,
                description: inputs.description,
                image: inputs.image,
                user: id
            })
            if (data?.success) {
                toast.success("Blog updated Successfully")
                setBlog(blog)
                navigate('/myblogs')
            }
        } catch (error) {
            toast.error(error)
        }
    }
    console.log(blog)
    return (
        <div>
            <>
                <form onSubmit={handleSubmit}>
                    <Box width={"50%"} border={3} borderRadius={10} padding={3} margin={"auto"} boxShadow={"10px 10px 20px #ccc"} display={"flex"} flexDirection={"column"} marginTop={"20px"}>
                        <Typography variant='h3' sx={{}} textAlign={"center"} fontWeight={"bold"} padding={2} color={"gray"}>Update a Blog</Typography>
                        <InputLabel sx={{ mb: 1, mt: 1, fontSize: "24px", fontWeight: "bold" }}>Title</InputLabel>
                        <TextField name='title' margin='normal' variant='outlined' value={inputs.title} onChange={handleChange} required></TextField>
                        <InputLabel sx={{ mb: 1, mt: 1, fontSize: "24px", fontWeight: "bold" }}>Description</InputLabel>
                        <TextField name='description' margin='normal' variant='outlined' value={inputs.description} onChange={handleChange} required></TextField>
                        <InputLabel sx={{ mb: 1, mt: 1, fontSize: "24px", fontWeight: "bold" }}>Image</InputLabel>
                        <TextField name='image' margin='normal' variant='outlined' value={inputs.image} onChange={handleChange} required></TextField>
                        <Button type='submit' sx={{ marginTop: 2 }} color='primary' variant='contained'>Update</Button>
                    </Box>
                </form>
            </>
        </div>
    )
}

export default BlogDetails