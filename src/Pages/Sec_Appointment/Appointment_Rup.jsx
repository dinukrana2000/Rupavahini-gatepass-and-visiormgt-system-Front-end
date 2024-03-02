import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Drawer from '../../Components/Drawer/Drawer';
import React, { useEffect, useState } from 'react';
import { Button, Grid, Select, TextField, InputLabel, MenuItem, FormControl, Box } from '@mui/material';
import axios from 'axios';

const BackgroundImg = styled('div') ({
    backgroundImage: 'url("https://assets-eu-01.kc-usercontent.com/77bbf83a-1306-0152-fea5-3b5eaf937634/7916661a-40c3-4d65-8ea8-6785dfe41ab8/GettyImages-1303567646.jpg")',
    backgroundSize: 'cover',
    display: 'flex',
    backgroundAttachment: "fixed",
    minHeight: '100vh',
    height: 'auto',
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
  const [In_Out, setIn_Out] = useState('');
  const [timeValue, setTimeValue] = useState('');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleButtonClick = () => {
    setShowAdditionalTypography(!showAdditionalTypography);
  };

  const handleChangeTime = (event) => {
    setTimeValue(event.target.value);
  };

  const handleChangeInOut = (event) => {
    setIn_Out(event.target.value);
  };

  const handleEnterClick = () => {
    // const updatedReportData = reportData.map(item => {
    //   if (item.label === "Time Out") {
    //     return { ...item, value: In_Out === "out" ? timeValue : item.value }; // Update time out only if In_Out is 'Out'
    //   } else if (item.label === "Time in") {
    //     return { ...item, value: In_Out === 'in' ? timeValue : item.value }; // Update time in only if In_Out is 'In'
    //   }
    //   return item;
    // // });
  
    // setReportData(updatedReportData);

    setTimeValue('');
    setIn_Out('');

    console.log('Time: ', timeValue);
    console.log('In/Out: ', In_Out);
  };
  
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [userData, setUserData] = useState(null);
  // const [useID, setUserID] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    // fetchUserData();
    fetchBookings();
  }, [userRole]);

  // const fetchUserData = async () => {
  //   const data = await getUserData();
  //   console.log(data);

  //   if (data) {
  //     setUserData(data);
  //     setUserID(data.id);
  //     setUserRole(data.userType);
  //     console.log(userRole);
  //   }
  // };

  const fetchBookings = async () => {
    if (userRole === 'security') {
      await axios 
      .get("")
      .then((response) => {
        console.log(response.data);
        setBookings(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching booking data",error);
      });
    }
  };

  return (
    <>
    <Drawer />
    <BackgroundImg>
      <Container>
        <h2><u>Visit Rupavahini</u></h2>

          <Grid width={"100%"} >
            {loading ? (
              <Box style={{width:'100%', background:'#D6C9CA', padding:'.5rem'}}>
                <Typography>Loading...</Typography>
              </Box>
            ) : (
              bookings.map((booking, index) => (
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
                  <Typography><b>{booking.name}</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <table>
                      <tr>
                        <td>Visitor Name:</td>
                        <td> {booking.name} </td>
                      </tr>
                      <tr>
                        <td>NIC:</td>
                        <td>{booking.nic}</td>
                      </tr>
                      <tr>
                        <td>Phone No:</td>
                        <td>{booking.cnumber}</td>
                      </tr>
                      <tr>
                        <td>Request Person's name:</td>
                        <td>{booking.Rname}</td>
                      </tr>
		              <tr>
                        <td>Time In:</td>
                        <td>{booking.timeIN}</td>
                      </tr>
		                  <tr>
                        <td>Time Out:</td>
                        <td>{booking.timeOUT}</td>
                      </tr>
                    </table>
                        {/* {reportData.map((item, index) => (
                          <div key={index} >
                            <span>{item.label}:</span>
                            <span>{item.label === 'Time Out' || item.label === 'Time in' ? item.value : '-'}</span>
                          </div>
                        ))} */}

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

                                  <MenuItem value={"in"}>In</MenuItem>
                                  <MenuItem value={"out"}>Out</MenuItem>

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
              ))
            )}
          </Grid>

      </Container>
    </BackgroundImg>
    </>
  );
};

export default Visit_Rup;
