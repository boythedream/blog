import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { ModeEditOutlined, DeleteForeverOutlined, ModeEdit } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/material';
import toast from 'react-hot-toast';
import axios from 'axios';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


export default function BlogCard({ title, description, image, user, time, id, isUser }) {
    const navigate = useNavigate()
    const handleEdit = () => {
        navigate(`/blog-details/${id}`)
    }
    const handleDelete = async () => {
        try {
            const { data } = await axios.delete(`http://localhost:8080/api/v1/blog/delete-blog/${id}`)
            if (data?.success) {
                toast.success("Blog Deleted Successfully")
                navigate('/blogs')
            }
        } catch (error) {
            toast.error(error)
        }
    }


    return (
        <Card sx={{ maxWidth: 345, margin: "auto", marginTop: 2, boxShadow: "5px 5px 10px #ccc" }}>
            {isUser && (
                <Box display={'flex'} >

                    <IconButton onClick={handleEdit} sx={{ marginLeft: 'auto' }}>
                        <ModeEdit />
                    </IconButton>
                    <IconButton onClick={handleDelete}>
                        <DeleteForeverOutlined />
                    </IconButton>
                </Box>
            )}
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="user">
                        {user}
                    </Avatar>
                }

                title={user}
                subheader={time}
            />
            <CardMedia
                component="img"
                height="194"
                image={image}
            />
            <CardContent>
                <Typography variant="h5" color="text.secondary">
                    Title: {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Description: {description}
                </Typography>
            </CardContent>


        </Card>
    );
}
