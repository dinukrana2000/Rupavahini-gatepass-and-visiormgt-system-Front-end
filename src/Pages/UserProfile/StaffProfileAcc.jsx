import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import Drawer from '../../Components/Drawer/Drawer';
import SettingsIcon from '@mui/icons-material/Settings';
//import axios from 'axios';

function StaffProfileAcc({ user }) {
  const [anchorEl, setAnchorEl] = useState(null);
  //const [user, setUser] = useState(null);
  /*useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user-profile');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);   use when get data from back end*/


  const handleSettingsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEditProfile = () => {
    console.log('Edit Profile clicked');
    handleMenuClose();
    // Add logic for handling Edit Profile
  };

  const handleChangePassword = () => {
    console.log('Change Password clicked');
    handleMenuClose();
    // Add logic for handling Change Password
  };

  return (
    <>
      <Drawer />
      <Box
        sx={{
          backgroundColor: '#D6C9CF',
          minHeight: '100vh',
          padding: '1rem',
          boxSizing: 'border-box',
        }}
      >
        <Card
          sx={{
            border: '1px solid black',
            backgroundColor: '#FFFFFF',
            marginBottom: '2rem',
            marginTop: '2rem',
            marginLeft: '2rem',
            marginRight: '2rem',
            alignItems: 'center',

            
          }}
        >
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <img
                  src="https://eapl15616.weebly.com/uploads/1/4/6/1/146126864/whatsapp-image-2024-01-28-at-4-34-03-pm_orig.jpeg"
                  alt="hello"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    margin: '0 auto',
                    float: 'left',
                  }}
                />
                 {/*<img
          src={user.profilePictureUrl}
          alt={`${user.userName}'s profile picture`}
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            margin: '0 auto',
            float: 'left',
          }}
        />   this the correct code when get image form back end*/}
              </Grid>
              <Grid item xs={12} sm={6} md={8} lg={9}>
                <Typography
                  variant="h4"
                  component="h2"
                  textAlign="middle"
                  sm={6}
                  md={8}
                  lg={9}
                  color="#973535"
                >
                  {user.userName}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card
          sx={{
            border: '1px solid black',
            backgroundColor: '#FFFFFF',
            marginTop: '2rem',
            marginLeft: '2rem',
            marginRight: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1" component="p" color="#973535">
                  <h2>User Details</h2>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" component="p" color="#973535">
                  <b> Employee ID</b>
                  <br />
                  <span style={{ color: '#000000' }}>{user.employeeID}</span>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" component="p" color="#973535">
                  <b> Full name</b>
                  <br />
                  <span style={{ color: '#000000' }}>{user.fullName}</span>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" component="p" color="#973535">
                  <b> User name</b>
                  <br />
                  <span style={{ color: '#000000' }}>{user.userName}</span>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" component="p" color="#973535">
                  <b>Email</b>
                  <br />
                  <span style={{ color: '#000000' }}>{user.email}</span>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" component="p" color="#973535">
                  <b>Contact number</b>
                  <br />
                  <span style={{ color: '#000000' }}>{user.contactNumber}</span>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <IconButton
            onClick={handleSettingsClick}
            sx={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              color: '#000000',
            }}
          >
            <SettingsIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleEditProfile} sx={{color:"#973535",'&:hover': { color: '#EEC01F' }}}>Edit Profile</MenuItem>
            <MenuItem onClick={handleChangePassword} sx={{color:"#973535",'&:hover': { color: '#EEC01F' }}}>Change Password</MenuItem>
          </Menu>
        </Card>
      </Box>
    </>
  );
}

export default StaffProfileAcc;
