import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Drawer from '../../Components/Drawer/Drawer';
import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';

const BackgroundImg = styled('div') ({
    backgroundImage: 'url("https://assets-eu-01.kc-usercontent.com/77bbf83a-1306-0152-fea5-3b5eaf937634/7916661a-40c3-4d65-8ea8-6785dfe41ab8/GettyImages-1303567646.jpg")',
    backgroundSize: 'cover',
    display: 'flex',
    backgroundAttachment: "fixed",
    height: '100vh',
    overflow: 'hidden',
    justifyContent: 'center',
    fontFamily: '"Roboto", sans-serif'
  
});

const Container = styled('div') ({
    display: 'flex',
    flexDirection: 'column',
    margin: '5%',
    padding: '2%',
    backgroundColor: 'rgb(255, 255, 255, 0.5)',
    width: '900px',
    height: 'auto',
    alignItems: 'center',

});

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  padding: '1%',
  border: `${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  background: '#973535',
    // theme.palette.mode === 'dark'
    //   ? 'rgba(255, 255, 255, .05)'
    //   : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
  backgroundColor: '#808080',
  // backdropFilter: 'blur(50px)', 
}));

function Visit_Rup() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <>
    <Drawer />
    <BackgroundImg>
      <Container>
        <h2><u>Visit Rupavahini</u></h2>
        
        <Grid container spacing={2} >

          <Grid style={{width:"100%", padding:"1%",margin:"2%", background:"#fff"}}>
          <ul>
            <li><b>Royal Collage</b></li>
          </ul>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
                <Typography>View Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                    School Name : <br/>
                    Grade: <br/>
                    No of Students: <br/>
                    Address: <br/>
                  </Typography>
              </AccordionDetails>
           </Accordion>
           <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
              <AccordionSummary aria-controls='panel11d-content' id='panel11d-header'>
                <Typography>Update</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                    <TextField id='time' label='time' variant='standard' />
                  </Typography>
              </AccordionDetails>
           </Accordion>
          </Grid>

          {/* <Grid item xs={12} sm={6}> */}
           
          {/* </Grid> */}

      {/* <Grid item xs={12} sm={3}> */}
      {/*  */}
      {/* </Grid> */}

      {/* <Grid item xs={12} sm={3}> */}
      {/* <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
              <AccordionSummary aria-controls='panel12d-content' id='panel12d-header'>
                <Typography>View</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                    School Name : <br/>
                    Grade: <br/>
                    No of Students: <br/>
                    Address: <br/>
                  </Typography>
              </AccordionDetails>
           </Accordion> */}
      {/* </Grid> */}

      </Grid>
    

        {/* <div style={{width:"100%"}}>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
            <Typography>Royal College</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              School Name : <br/>
              Grade: <br/>
              No of Students: <br/>
              Address: <br/>
            </Typography>
          </AccordionDetails>
        </Accordion>
        </div> */}
      </Container>
    </BackgroundImg>
    </>
  );
};

export default Visit_Rup;
