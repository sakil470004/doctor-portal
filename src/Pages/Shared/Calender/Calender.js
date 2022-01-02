import React from 'react'
// import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

export default function Calender({ date, setDate }) {
  // function convertUTCDateToLocalDate(date) {
  //   var newDate = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
  //   return newDate;
  // }
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        displayStaticWrapperAs='desktop'
        value={date}
        // shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setDate(newValue);
          
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      {/* {console.log(date)} */}
{/* {console.log(date,convertUTCDateToLocalDate(date))} */}
    </LocalizationProvider>
  );
}
