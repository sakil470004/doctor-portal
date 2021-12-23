import { Button, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import treatment from './../../../images/treatment.png'
export default function ExceptionalDental() {
    return (
        <Container>
            <Grid container spacing={3} >
                <Grid item xs={12} md={5} >
                    <img src={treatment} style={{ width: '100%' }} alt='treatment' />
                </Grid>
                <Grid item xs={12} md={7}
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        textAlign: 'left',
                        alignItems: 'center',
                    }}
                >
                    <Box>
                        <Typography variant='h3' >
                            Exceptional Dental Care, on Your Terms
                        </Typography>
                        <Typography variant='h6' sx={{ my: 5 }} style={{ fontSize: 20, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil blanditiis iusto suscipit quidem pariatur amet atque a explicabo corporis tenetur.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo placeat id maxime dolorem distinctio odit maiores rerum quaerat, exercitationem natus in dolore voluptates error? Porro eligendi quod consequuntur ex ratione?
                        </Typography>
                        <Button style={{ backgroundColor: '#5CE7ED' }}variant="contained">Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    )
}
