import React from 'react'
// import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';

import fluoride from './../../../images/fluoride.png'
import cavity from './../../../images/cavity.png'
import whitening from './../../../images/whitening.png'
import Typography from '@mui/material/Typography';

const services = [

    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio, assumenda at perspiciatis vitae perferendis voluptas cumque quod pariatur eum laudantium inventore fuga aliquid! Vel molestiae sunt blanditiis vitae nostrum repudiandae!',
        img: fluoride
    },

    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio, assumenda at perspiciatis vitae perferendis voluptas cumque quod pariatur eum laudantium inventore fuga aliquid! Vel molestiae sunt blanditiis vitae nostrum repudiandae!',
        img: cavity
    },

    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio, assumenda at perspiciatis vitae perferendis voluptas cumque quod pariatur eum laudantium inventore fuga aliquid! Vel molestiae sunt blanditiis vitae nostrum repudiandae!',
        img: whitening
    },

]


export default function Services() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{fontWeight:500,m:2,color:'success.main'}} variant="h6" component="div">
                    Our Services
                </Typography>
                <Typography sx={{fontWeight:600,m:5}} variant="h4" component="div" >
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map((service, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <Service
                                service={service}
                                key={service.name}
                            >

                            </Service>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}
