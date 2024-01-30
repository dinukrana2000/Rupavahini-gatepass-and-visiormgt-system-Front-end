import {useState} from 'react'
import { Grid, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import './Forgot_Pwd.css'
import MuiButton from '../../Components/Button/MuiButton';

import im4 from '../../Assets/im4.jpg'

function Forgot_Pwd() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
      email: ''
  });

  const [errors, setErrors] = useState({});

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
      setFormData({
          email: ''
      });
      setErrors({});
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      const Error = {};

      if (!formData.email.trim()) {
        Error.email = "E-mail is required";
      } else if (!isValidate(formData.email)) {
        Error.email = "Invalid email format";
      }
      if (Object.keys(Error).length > 0) {
        setErrors(Error);
      } else {
        handleOpen();
        navigate('/Change');
      }
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


  const isValidate = (email) => {
      const Eformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return Eformat.test(email);
  };

  return (
    <div className='bg-pw'>
    <div className='container-pw'>

      <div className="left-side-pw"> 
        <h1 className='para-h1'>Forgot <br/> Password</h1>
        <p>Please enter your e-mail address below</p>

        <form onSubmit={handleSubmit}>
            <Grid style={{textAlign: 'center'}}>
              <TextField
                id='email'
                name='email'
                label='E-mail'
                fullWidth
                value={formData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              
              <MuiButton label="Next" onClick={handleSubmit}/>

            </Grid>
            
            <div className='back'>
              <a href='/User_Login'>Back to again</a>
            </div>

        </form>
      </div>

      <div className="right-side-pw">
        <img src={im4} alt='image'/>
        
      </div>

    </div>
    </div>
  );
};

export default Forgot_Pwd;