import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import login from './../../images/login.png'
export default function Register() {
    const [loginData, setLoginData] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }

    const handleRegisterSubmit = (e) => {
       if(loginData.password!==loginData.password2){
         alert('your password did not match')
         return  
       }
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    <form onSubmit={handleRegisterSubmit}>
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
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt='login' style={{ width: '100%' }} />
                </Grid>

            </Grid>
        </Container>
    )
}
