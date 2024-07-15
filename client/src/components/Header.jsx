import React, { useState } from 'react'
import { Box, AppBar, Toolbar, Button, Typography, Tab, Tabs } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authAction } from '../redux/Store'
import toast from 'react-hot-toast'

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //global state
    let isLogin = useSelector((state) => state.isLogin)
    isLogin = isLogin || localStorage.getItem('userId')
    console.log(isLogin);
    const [value, setValue] = useState()

    const handleLogout = () => {
        try {
            dispatch(authAction.logout())
            toast.success("Logout successfully")
            navigate('/login')
        } catch (error) {
            toast.error("Something went wrong")

        }
    }
    return (
        <>
            <AppBar position='sticky'>
                <Toolbar>
                    <Typography variant='h3s'>My Blog App</Typography>

                    {isLogin && <>
                        <Box display={'flex'} marginLeft={'auto'} marginRight={'auto'}>
                            <Tabs textColor='inherit' value={value} onChange={(e, val) => setValue(val)}>
                                <Tab label={"Blogs"} LinkComponent={Link} to="/blogs" />
                                <Tab label={"My Blogs"} LinkComponent={Link} to="/myBlogs" />
                                <Tab label={"Create Blog"} LinkComponent={Link} to="/create-blog" />
                            </Tabs>
                        </Box>
                    </>}
                    <Box display={'flex'} marginLeft={'auto'}>
                        {!isLogin && (<>
                            <Link to={'/login'}>
                                <Button sx={{ margin: 1, color: 'white' }}>Login</Button>   </Link>
                            <Link to={'/register'}>
                                <Button sx={{ margin: 1, color: 'white' }}>register</Button>   </Link>
                        </>)}
                        {isLogin && (

                            <Button onClick={handleLogout} sx={{ margin: 1, color: 'white' }}>Logout</Button>
                        )}


                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header