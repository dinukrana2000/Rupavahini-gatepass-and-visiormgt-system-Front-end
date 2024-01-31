import React from 'react'
import Button from '@mui/material/Button';
import './button.css'
import { useNavigate } from 'react-router-dom';
function AppoinmentBt() {
  const navigate = useNavigate();
  const handlappoinmtbt = () => {
    navigate('/visit1');
  }
  return (
    <div>
       <Button className="button" variant="contained" sx={{marginBottom: '2%',
              backgroundColor: '#973535',
              color: 'white',
              borderRadius: '66px',
              transition: 'transform 0.3s',
              height: '20%',
              fontSize: '1.5vw',
              width:'100%'}} onClick={handlappoinmtbt}>
        Request for Appoinment
      </Button>
    </div>
  )
}

export default AppoinmentBt
