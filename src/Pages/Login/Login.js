import { Container, Grid } from '@mui/material'
import React from 'react'
import login from './../../images/login.png'
export default function Login() {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt='login' style={{width:'100%'}}/>
                </Grid>

            </Grid>
        </Container>
    )
}
