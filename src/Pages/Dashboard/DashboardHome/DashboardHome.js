import React from 'react'
import { Grid } from '@mui/material';
import Calender from './../../Shared/Calender/Calender'
import Appointments from '../Appointments/Appointments';
import Box from '@mui/material/Box';

export default function DashboardHome() {
    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={5}>
                        <Calender
                            date={date} setDate={setDate}
                        ></Calender>
                        
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Appointments date={date} />
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}
