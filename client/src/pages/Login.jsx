
import React, { useState } from 'react'
import { Box, Button, Input, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { authAction } from '../redux/Store'
import toast from 'react-hot-toast'
const Login = () => {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();


    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:8080/api/v1/user/login', { email: inputs.email, password: inputs.password })
            if (data.success) {

                dispatch(authAction.login())
                localStorage.setItem('userId', data?.user._id)
                toast.success("User Login successfully")
                navigate('/')

            }
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>


                <Box maxWidth={450} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} margin={'auto'} marginTop={5} boxShadow={'10px 10px 20px #ccc'}
                    padding={3} borderRadius={5}>
                    <Typography variant='h4' textTransform={'uppercase'} padding={3} textAlign={'center'}>Login</Typography>

                    <TextField value={inputs.email} sx={{ width: '330px', padding: '1px' }} placeholder='email' name='email' margin='normal' type='email' required onChange={handleChange} />
                    <TextField value={inputs.password} sx={{ width: '330px', padding: '5px' }} placeholder='password' name='password' margin='normal' type='password' required onChange={handleChange} />

                    <Button type='sumbit' variant='contained' color='primary' sx={{ marginTop: '3', borderRadius: '5' }}>Login</Button>
                    <Button onClick={() => navigate('/register')} color='primary' sx={{ marginTop: '3', borderRadius: '5' }}>Dont have an Account plz register</Button>
                </Box>
            </form>
        </>
    )
}

export default Login