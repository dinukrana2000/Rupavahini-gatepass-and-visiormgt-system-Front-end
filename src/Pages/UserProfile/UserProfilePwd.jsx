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
  TextField,
  Button,
  InputAdornment
} from '@mui/material';
import Drawer from '../../Components/Drawer/Drawer';
import SettingsIcon from '@mui/icons-material/Settings';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import axios from 'axios';


function UserProfileAccEdit({ user }) {
  const [editing, setEditing] = useState(true);
  const [editedUser, setEditedUser] = useState({
    userName: user.userName,
    currentPassword: '',
    newPassword: '',
    reEnterNewPassword: '',
  });

  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    reEnterNewPassword: false,
  });
  
  const [anchorEl, setAnchorEl] = useState(null);


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

  const handleFieldChange = (fieldName, value) => {
    setEditedUser((prevUser) => ({
      ...prevUser,
      [fieldName]: value,
    }));
  };

  const handleSaveChanges = async () => {
    const formData = new FormData();
    formData.append('userName', editedUser.userName);
    formData.append('currentPassword', editedUser.currentPassword);
    formData.append('newPassword', editedUser.newPassword);
    formData.append('reEnterNewPassword', editedUser.reEnterNewPassword);

    try {
      const response = await axios.post('/api/user-profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status !== 200) {
        throw new Error('Failed to save changes');
      }

      setEditing(false);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving changes. Please try again later.');
    }
  };

  const handleCancel = () => {
    // Handle cancel logic to revert changes
    setEditedUser({
        userName: user.userName,
        currentPassword: '',
        newPassword: '',
        reEnterNewPassword: '',
    });
  };
  const handlePasswordVisibility = (fieldName) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [fieldName]: !prevState[fieldName],
    }));
  };

  const validatePassword = () => {
    const { newPassword, reEnterNewPassword } = editedUser;
  
    // Check if new password and re-entered new password match
    if (newPassword !== reEnterNewPassword) {
      alert("New password and re-entered new password do not match.");
      return false;
    }
  
    // Check if new password meets certain criteria (e.g., minimum length, contains at least one number and one letter)
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      alert(
        "New password must be at least 8 characters long, contain at least one number and one letter, and have no spaces."
      );
      return false;
    }
  
    return true;
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
        {/* Your Profile Image Card */}
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

        {/* Your User Profile Card */}
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
              
              <Grid item xs={8}>
                <TextField
                  label="User Name"
                  fullWidth
                  variant="filled"
                  value={editedUser.userName}
                  onChange={(e) => handleFieldChange('userName', e.target.value)}
                  disabled={editing}
                  InputLabelProps={{
                    style: { color: '#973535' } 
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                            <TextField
                    label="Current Password"
                    fullWidth
                    type={showPassword.currentPassword ? "text" : "password"}
                    variant="filled"
                    value={editedUser.currentPassword}
                    onChange={(e) => handleFieldChange('currentPassword', e.target.value)}
                    disabled={!editing}
                    InputLabelProps={{
                    style: { color: '#973535' } 
                    }}
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => handlePasswordVisibility('currentPassword')}
                        >
                            {showPassword.currentPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                        </InputAdornment>
                    ),
                    }}
                />
              </Grid>
              <Grid item xs={8}>
              <TextField
                    label="New Password"
                    fullWidth
                    type={showPassword.newPassword ? "text" : "password"}
                    variant="filled"
                    value={editedUser.newPassword}
                    onChange={(e) => handleFieldChange('newPassword', e.target.value)}
                    disabled={!editing}
                    InputLabelProps={{
                    style: { color: '#973535' } 
                    }}
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => handlePasswordVisibility('newPassword')}
                        >
                            {showPassword.newPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                        </InputAdornment>
                    ),
                    }}
                />
              </Grid>
              <Grid item xs={8}>
              <TextField
                    label="Re-enter New Password"
                    fullWidth
                    type={showPassword.reEnterNewPassword ? "text" : "password"}
                    variant="filled"
                    value={editedUser.reEnterNewPassword}
                    onChange={(e) => handleFieldChange('reEnterNewPassword', e.target.value)}
                    disabled={!editing}
                    InputLabelProps={{
                    style: { color: '#973535' } 
                    }}
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => handlePasswordVisibility('reEnterNewPassword')}
                        >
                            {showPassword.reEnterNewPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                        </InputAdornment>
                    ),
                    }}
                />
              </Grid>
              
             
           
              <Grid container spacing={2}>
  <Grid item xs={12} md={6}>
    {(editing && (
      <>
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={() => {
            if (validatePassword()) {
              handleSaveChanges();
            }
          }}
          sx={{ color: '#FFFFFF', mt: 2, ml: 2, width: '15vw' ,backgroundColor:'#973535',borderRadius:'66px',height:'5vh',fontSize: '1vw',transition: 'transform 0.3s','&:hover': {
            color: '#EEC01F !important',
            transform: 'scale(1.08)',
            backgroundColor: '#973535',
          },}}
        >
          Save Changes
        </Button>
      </>
    ))}
  </Grid>
  <Grid item xs={12} md={6}>
    {(editing && (
      <>
        <Button
          variant="outlined"
          startIcon={<CancelIcon />}
          onClick={handleCancel}
          sx={{ color: '#FFFFFF', mt: 2, ml: 2, width: '15vw',backgroundColor:'#973535' ,borderRadius:'66px',height:'5vh',fontSize: '1vw',transition: 'transform 0.3s','&:hover': {
            color: '#EEC01F !important',
            transform: 'scale(1.08)',
            backgroundColor: '#973535',
          },}}
        >
          Cancel
        </Button>
      </>
    ))}
  </Grid>
</Grid>

           </Grid>
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
          {/* Menu options */}
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
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default UserProfileAccEdit;
