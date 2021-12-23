import React from 'react'
import chair from './../../../images/chair.png'
import bg from './../../../images/bg.png'
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg={
    background:`url(${bg})`
    
}
const verticalCenter={
    display:'flex',
    alignItems:'center',
    height:400
   
}

export default function Banner() {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{...verticalCenter,textAlign:'left'}} item xs={12} md={6}>
                  <Box>
                  <Typography variant='h3'>Your New Smile<br />
                        Starts Here
                    </Typography>
                    <Typography variant='h6' sx={{  my:5,fontSize: 13, color: 'gray', fontWeight: 200 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur ullam tempora eos labore explicabo atque! Quisquam eveniet ipsa illum!
                    </Typography>
                    <Button style={{ backgroundColor: '#5CE7ED' }} variant="contained">Get Appointment</Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} alt='chair' src={chair}/>
                </Grid>

            </Grid>
        </Container>
    )
}
