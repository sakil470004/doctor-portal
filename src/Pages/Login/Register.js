import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import login from './../../images/login.png'
import useAuth from './../../hooks/useAuth'

export default function Register() {
    const [loginData, setLoginData] = useState({})

    const { user, registerUser, isLoading, authError } = useAuth()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }

    const handleRegisterSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert('your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password)
        setLoginData({})
        e.reset()
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleRegisterSubmit}>
                        <TextField
                            type='email'
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                            name='email'
                            onChange={handleOnChange}
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            type='password'
                            id="standard-basic"
                            label="Your Password"
                            variant="standard"
                            name='password'
                            onChange={handleOnChange}
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            type='password'
                            id="standard-basic"
                            label="Confirm Password"
                            variant="standard"
                            name='password2'
                            onChange={handleOnChange}
                        />

                        <Button
                            sx={{ width: '75%', m: 1 }}
                            variant='contained'
                            type='submit'
                        >Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/login'
                        >
                            <Button
                                variant='text'
                                type=''
                            >Already Registered? Please Login</Button></NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {(user.email && !authError) && <Alert severity='success'>User Created Successfully</Alert>}
                    {authError && <Alert severity='error'>{authError}</Alert>}
                    
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt='login' style={{ width: '100%' }} />
                </Grid>

            </Grid>
        </Container>
    )
}
