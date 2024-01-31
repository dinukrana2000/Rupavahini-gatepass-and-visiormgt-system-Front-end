import React from 'react'
import Button from '@mui/material/Button';
import './button.css'
import { useNavigate } from 'react-router-dom';
function VisitRupavahiniBt() {
  const navigate = useNavigate();
  const handleVisitreq = () => {
    navigate('/visit2');
  };
  return (
    <div>
      <Button className="button" variant="contained" sx={{marginBottom: '2%',
              backgroundColor: '#973535',
              color: 'white',
              borderRadius: '66px',
              transition: 'transform 0.3s',
              height: '20%',
              fontSize: '1.5vw',
              width:'100%'}} onClick={handleVisitreq}>
        Request for vist Rupavahini
      </Button>
    </div>
  )
}

export default VisitRupavahiniBt
