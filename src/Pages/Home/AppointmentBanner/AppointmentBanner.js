import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from './../../../images/doctor.png'
import bg from './../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

// here use darken and backgroundBlendMode
const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 73, 84,0.9)',
    backgroundBlendMode: 'darken,luminosity',
    marginTop: 175

}

export default function AppointmentBanner() {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400, marginTop: -110 }} src={doctor} alt='doctor'/>
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    alignItems: 'center'
                }}>
                    <Box>
                        <Typography variant='h6' sx={{mb:5}} style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant='h4' style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant='h6' sx={{my:5}} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil blanditiis iusto suscipit quidem pariatur amet atque a explicabo corporis tenetur.
                        </Typography>
                        <Button style={{ backgroundColor: '#5CE7ED' }}variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
