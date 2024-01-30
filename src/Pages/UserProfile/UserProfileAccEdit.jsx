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
  Input,
} from '@mui/material';
import Drawer from '../../Components/Drawer/Drawer';
import SettingsIcon from '@mui/icons-material/Settings';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';


function UserProfileAccEdit({ user }) {
  const [editing, setEditing] = useState(true);
  const [editedUser, setEditedUser] = useState({
    fullName: user.fullName,
    userName: user.userName,
    email: user.email,
    contactNumber: user.contactNumber,
  });
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [imageFile, setImageFile] = useState(null);

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
    formData.append('fullName', editedUser.fullName);
    formData.append('userName', editedUser.userName);
    formData.append('email', editedUser.email);
    formData.append('contactNumber', editedUser.contactNumber);
  
    // Append the image if it exists
    if (imageFile) {
      formData.append('image', imageFile);
    }
  
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
      fullName: user.fullName,
      userName: user.userName,
      email: user.email,
      contactNumber: user.contactNumber,
    });
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
              <Grid item xs={8} >
                <TextField
                  label="Full Name"
                  fullWidth
                  variant="filled"
                  value={editedUser.fullName}
                  onChange={(e) => handleFieldChange('fullName', e.target.value)}
                  disabled={!editing}
                  InputLabelProps={{
                    style: { color: '#973535' } 
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  label="User Name"
                  fullWidth
                  variant="filled"
                  value={editedUser.userName}
                  onChange={(e) => handleFieldChange('userName', e.target.value)}
                  disabled={!editing}
                  InputLabelProps={{
                    style: { color: '#973535' } 
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  label="Email"
                  fullWidth
                  variant="filled"
                  value={editedUser.email}
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                  disabled={!editing}
                  InputLabelProps={{
                    style: { color: '#973535' } 
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  label="Contact Number"
                  fullWidth
                  variant="filled"
                  value={editedUser.contactNumber}
                  onChange={(e) => handleFieldChange('contactNumber', e.target.value)}
                  disabled={!editing}
                  InputLabelProps={{
                    style: { color: '#973535' } 
                  }}
                />
                
              </Grid>
              <Grid item xs={8}>
      <Input
        type="file"
        fullWidth
        inputProps={{
          accept: 'image/*',
        }}
        disabled={!editing}
        onChange={(e) => {
          setImageFile(e.target.files[0]);
          
        }}
        InputLabelProps={{
          shrink: true,
          style: { color: '#973535' },
        }}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          component="span"
          sx={{
            color: '#FFFFFF',
            mt: 2,
            ml: 2,
            width: '7vw',
            backgroundColor: '#973535',
            
            height: '4vh',
            fontSize: '0.5vw',
            transition: 'transform 0.3s',
            '&:hover': {
              color: '#EEC01F !important',
              transform: 'scale(1)', 
              backgroundColor: '#973535',
            },
          }}
        >
          Upload Image
        </Button>
      </label>
    </Grid>
           
              <Grid container spacing={2}>
  <Grid item xs={12} md={6}>
    {(editing && (
      <>
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={handleSaveChanges}
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
