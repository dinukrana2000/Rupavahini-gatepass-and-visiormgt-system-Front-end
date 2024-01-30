import  React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import './Calender.css';


const Cal = ({clickedDate, setClickedDate}) => {
  
  


  return (
 
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DateCalendar']}>
      <DateCalendar
         orientation="landscape"
        referenceDate={dayjs('2023-04-17')}
        views={['year', 'month', 'day']}
        className='calender'
        onChange={(value)=>{
          const clickedDate = value.$D;
        const clickedMonth = value.$M + 1;
        const clickedYear = value.$y;

        setClickedDate(`${clickedDate}/${clickedMonth}/${clickedYear}`);

        console.log('Date:', clickedDate);
        console.log('Month:', clickedMonth);
        console.log('Year:', clickedYear);
        }}
      />
    </DemoContainer>
  </LocalizationProvider>
  )
}

export default Cal