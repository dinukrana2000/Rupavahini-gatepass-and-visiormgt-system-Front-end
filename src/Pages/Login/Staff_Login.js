import {useState} from 'react'
import './login.css'
import { IconButton, InputAdornment, TextField } from '@mui/material';
import axios from 'axios'
import { Visibility, VisibilityOff } from '@mui/icons-material';

import im3 from '../../Assets/im3.jpg';
import MuiButton from '../../Components/Button/MuiButton';

function Staff_login() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
      empId: '',
      password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickDownPassword = (event) =>{
    event.preventDefault();
  };

  const [errors, setErrors] = useState({});

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
      setFormData({
          empId:'',
          password:''
      });
      setErrors({});
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      const Error = {};

      if (!formData.empId.trim()) {
        Error.empId = "User name is required";
      }
      if (!formData.password.trim()) {
        Error.password = "Password is required";
      } else if (formData.password.length < 6) {
        Error.password = "Password must be at least 6 characters"
      }
      if (Object.keys(Error).length > 0) {
        setErrors(Error);
      } else {
        handleOpen();
      }
  };

  const handleConfirmSubmit = () => {
    console.log('Form submited!', formData);
    const response =  axios.post`(http://localhost:4000/api/reservation/filter,formData )`;
    handleClose();
};

  const handleInputChange = (e) => {
      const {name, value} = e.target;
      setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
      }));
      setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: '',
      }));
  };

  

  return (
    <div className='bg'>
    <div className='container1'>

      <div className="left-side"> 
        <img src={im3} />
        <h3 className='para'>Welcome to Sri Lanaka Rupavahini Corporation</h3>
      </div>

      <div className="right-side">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
            
              <TextField
                id='empId'
                name='empId'
                label='Emp Id'
                fullWidth
                variant='standard'
                value={formData.empId}
                onChange={handleInputChange}
                error={!!errors.empId}
                helperText={errors.empId}
                style={{marginBottom: '10%'}}
              />
            
            <TextField
                id='password'
                name='password'
                label='Password'
                type={showPassword ? 'text' : 'password'}
                variant='standard'
                fullWidth
                value={formData.password}
                onChange={handleInputChange}
                error={!!errors.password}
                helperText={errors.password}
                style={{ marginBottom: '15%' }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleClickDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
      />

            <div className='forgot'>
                <a href='/Forgot'>Forgot Password?</a> 
            </div>

            <MuiButton label='Login' onClick={handleSubmit}/>
                       
            <div className='register'>
                <p>Don't have an account? <a href='#'>Register</a></p>
            </div>
            
        </form>
      </div>

    </div>
    </div>
  );
};

export default Staff_login;

