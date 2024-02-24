import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Drawer from '../../Components/Drawer/Drawer';
import React, { useState } from 'react';
import { Button, Grid, Select, TextField, InputLabel, MenuItem, FormControl } from '@mui/material';

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
    width: '800px',
    height: 'auto',
    alignItems: 'center',

});

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  margin: '1%',
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
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: 'white'}} />}
    {...props}
  />
))(({ theme }) => ({
  background: '#973535',
  color: 'white',
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
  // backdropFilter: 'blur(50px)', 
}));

function Visit_Rup() {
  const [expanded, setExpanded] = useState(false);
  const [showAdditionalTypography, setShowAdditionalTypography] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [In_Out, setIn_Out] = useState('');
  const [timeValue, setTimeValue] = useState('');

  const handleChangeInOut = (event) => {
    setIn_Out(event.target.value);
  };

  const handleChangeTime = (event) => {
    setTimeValue(event.target.value);
  };

  const handleEnterClick = () => {
    setTimeValue('');
    setIn_Out('');

    console.log('Time: ', timeValue);
    console.log('In/Out: ', In_Out)
  };

  const handleButtonClick = () => {
    setShowAdditionalTypography(!showAdditionalTypography);
  };


  return (
    <>
    <Drawer />
    <BackgroundImg>
      <Container>
        <h2><u>Visit Rupavahini</u></h2>
        
        <Grid width={"100%"} >
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
                <Typography><b>Royal College</b></Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                    School Name : <br/>
                    Grade: <br/>
                    No of Students: <br/>
                    Address: <br/>
                  </Typography>
                  <hr/>
                  <Grid container justifyContent="center" paddingBottom={'2%'}>
                  <Button variant='contained' onClick={handleButtonClick} style={{ backgroundColor: '#973535'}}>Update</Button>
                  </Grid>

                  {showAdditionalTypography && (

                    <Grid backgroundColor={'#D6C9CA'} padding={'2%'}>

                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={4} justifyContent={'center'}>
                        <TextField id='time' label='Time' type='time' variant='standard' size='small'focused value={timeValue} onChange={handleChangeTime}/>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                            <FormControl size="small" fullWidth>
                              <InputLabel id="demo-simple-select-label">In/Out</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={In_Out}
                                label="In/Out"
                                onChange={handleChangeInOut} >

                                  <MenuItem value={10}>In</MenuItem>
                                  <MenuItem value={20}>Out</MenuItem>

                              </Select>
                            </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={4} style={{ textAlign: 'right' }}>
                        <Button variant='outlined' onClick={handleEnterClick} >Enter</Button>
                      </Grid>
                    </Grid>
                    
                    </Grid> 
                  )}

              </AccordionDetails>
           </Accordion>
      
          </Grid>

          <Grid width={"100%"} >
              <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
              <AccordionSummary aria-controls='panel12d-content' id='panel12d-header'>
                <Typography><b>Royal College</b></Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                    School Name : <br/>
                    Grade: <br/>
                    No of Students: <br/>
                    Address: <br/>
                  </Typography>
                  <hr/>
                  <Grid container justifyContent="center" paddingBottom={'2%'}>
                  <Button variant='contained' onClick={handleButtonClick} style={{ backgroundColor: '#973535'}}>Update</Button>
                  </Grid>

                  {showAdditionalTypography && (

                    <Grid backgroundColor={'#D6C9CA'} padding={'2%'}>

                    <Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={4}>
                        <TextField id='time' label='Time' type='time' variant='standard' size='small' focused fullWidth/>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                            <FormControl size="small" fullWidth>
                              <InputLabel id="demo-simple-select-label">In/Out</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={In_Out}
                                label="In/Out"
                                onChange={handleChangeInOut} >

                                  <MenuItem value={10}>In</MenuItem>
                                  <MenuItem value={20}>Out</MenuItem>

                              </Select>
                            </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Button variant='outlined'  >Enter</Button>
                      </Grid>
                    </Grid>
                      
                    </Typography>

                    </Grid> 
                  )}

              </AccordionDetails>
           </Accordion>
      
          </Grid>

      </Container>
    </BackgroundImg>
    </>
  );
};

export default Visit_Rup;
