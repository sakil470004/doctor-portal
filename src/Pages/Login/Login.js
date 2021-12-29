import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'
import login from './../../images/login.png'
export default function Login() {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation()
    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }

    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    const handleGoogleSignIn =()=>{
        signInWithGoogle(location,history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        LogIn
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            type='email'
                            sx={{ width: '75%', m: 1 }}
                            label="Your Email"
                            variant="standard"
                            name='email'
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            type='password'
                            label="Your Password"
                            variant="standard"
                            name='password'
                            onBlur={handleOnBlur}
                        />

                        <Button
                            sx={{ width: '75%', m: 1 }}
                            variant='contained'
                            type='submit'
                        >Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/register'>
                            <Button
                                variant='text'
                                type=''
                            >New User? Please Register</Button></NavLink>
                    </form>
                    <p>-----------------------------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant='contained'>Google Sign In</Button>
                    {isLoading && <CircularProgress />}
                    {(user?.email && !authError) && <Alert severity='success'>User Login Successfully</Alert>}
                    {authError && <Alert severity='error'>{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt='login' style={{ width: '100%' }} />
                </Grid>

            </Grid>
        </Container>
    )
}
