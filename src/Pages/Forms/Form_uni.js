import React, { useState } from "react"
import { TextField, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import '../Form.css';
// import axios from 'axios';
import SubmitButton from "../../Components/Button/SubmitButton";
import Drawer from "../../Components/Drawer/Drawer"


const useStyles = { 
    section: {
        marginTop: '5px',
        marginBottom: '10px',
    }
};

function Form() {
    const [open, setOpen] = useState(false);
    const [uniData, setUniData] = useState({
        uniname: '',
        uniaddress: '',
        Rqname: '',
        Rqdesignation: '',
        Rqemail: '',
        Rqcnumber: '',
        uniMstudent: '',
        uniFstudent: '',
        univisitors: '',
    });

    
    const [validationErrors, setValidationErrors] = useState({});

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setUniData({
            uniname: '',
            uniaddress: '',
            Rqname: '',
            Rqdesignation: '',
            Rqemail: '',
            Rqcnumber: '',
            uniMstudent: '',
            uniFstudent: '',
            univisitors: '',
        });
        setValidationErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (!uniData.uniname.trim()) {
            errors.uniname = "This field is required";
        }
        if (!uniData.Rqname.trim()) {
            errors.Rqname = "Request person's name is required";
        }
        if (!uniData.Rqemail.trim()) {
            errors.Rqemail = "Email is required";
        } else if (!isValidEmail(uniData.Rqemail)) {
            errors.Rqemail = "Invalid email format";
        }
        if (!uniData.Rqcnumber.trim()) {
            errors.Rqcnumber = "Contact number is required";
        } else if (uniData.Rqcnumber.length !== 10) {
            errors.Rqcnumber = "Must have 10 numbers";
        }
        if (!uniData.uniMstudent.trim()) {
            errors.uniMstudent = "No of male students is required";
        }
        if (!uniData.uniFstudent.trim()) {
            errors.uniFstudent = "No of female students is required";
        }
        if (!uniData.univisitors.trim()) {
            errors.univisitors = "This field is required";
        }
        if (Object.keys(errors).length > 0){
            setValidationErrors(errors);
        } else {
            handleOpen();
        }
    };
    
    const handleConfirmSubmit = () => {
        console.log('Form submited!', uniData);
        // const response =  axios.post`(http://localhost:4000/api/reservation/filter,formData )`;
        handleClose();
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUniData((prevUniData) => ({
            ...prevUniData,
            [name]: value,
        }));
        setValidationErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

  return (
    <>
    <Drawer/>
    <div className="bg-f">
        <div className="container-f">
            <h2>University/ College/ Institute Details</h2>
            <form onSubmit={handleSubmit}>
            <TextField 
                id="uniname" 
                name="uniname"
                label="University/College/Institute Name" 
                variant="outlined"
                fullWidth
                required
                value={uniData.uniname}
                onChange={handleInputChange}
                error={!!validationErrors.uniname}
                helperText={validationErrors.uniname}
                style={useStyles.section}
            />
            <TextField 
                id="uniaddress" 
                name="uniaddress"
                label="Address"  
                variant="outlined"
                fullWidth
                value={uniData.uniaddress}
                onChange={handleInputChange}
                    // error={!!validationErrors.uniaddress}
                    // helperText={validationErrors.uniaddress}
                style={useStyles.section}
            />
            <TextField 
                id="Rqname" 
                name="Rqname"
                label="Authorized Request Person's Name"
                variant="outlined"
                fullWidth
                required
                value={uniData.Rqname}
                onChange={handleInputChange}
                error={!!validationErrors.Rqname}
                helperText={validationErrors.Rqname}
                style={useStyles.section}
            />
            <TextField 
                id="Rqdesignation" 
                name="Rqdesignation"
                label="Designation"
                variant="outlined"
                fullWidth
                value={uniData.Rqdesignation}
                onChange={handleInputChange}
                // error={!!validationErrors.Rqdesignation}
                // helperText={validationErrors.Rqdesignation}
                style={useStyles.section}
            />
  
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <TextField 
                        id="Rqemail" 
                        name="Rqemail"
                        label="Email" 
                        variant="outlined"
                        fullWidth
                        required
                        value={uniData.Rqemail}
                        onChange={handleInputChange}
                        error={!!validationErrors.Rqemail}
                        helperText={validationErrors.Rqemail}
                        style={useStyles.section}
                    />
              </Grid>

              <Grid item xs={12} sm={6}>
              <TextField 
                        id="Rqcnumber" 
                        name="Rqcnumber"
                        label="Contact Number" 
                        variant="outlined"
                        fullWidth
                        required
                        value={uniData.Rqcnumber}
                        onChange={handleInputChange}
                        error={!!validationErrors.Rqcnumber}
                        helperText={validationErrors.Rqcnumber}
                        style={useStyles.section}
                    />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <TextField 
                        id="uniMstudent" 
                        name="uniMstudent"
                        label="No of male Students" 
                        variant="outlined"
                        type="number"
                        fullWidth
                        required
                        value={uniData.uniMstudent}
                        onChange={handleInputChange}
                        error={!!validationErrors.uniMstudent}
                        helperText={validationErrors.uniMstudent}
                        style={useStyles.section}
                    />
              </Grid>

              <Grid item xs={12} sm={6}>
              <TextField 
                        id="uniFstudent" 
                        name="uniFstudent"
                        label="No of Female Students" 
                        variant="outlined"
                        type="number"
                        fullWidth
                        required
                        value={uniData.uniFstudent}
                        onChange={handleInputChange}
                        error={!!validationErrors.uniFstudent}
                        helperText={validationErrors.uniFstudent}
                        style={useStyles.section}
                    />
              </Grid>
            </Grid>

           <TextField 
                id="univisitors"
                name="univisitors"
                label="No of Other Visitors"
                variant="outlined"
                type="number"
                fullWidth
                required
                value={uniData.univisitors}
                onChange={handleInputChange}
                error={!!validationErrors.univisitors}
                helperText={validationErrors.univisitors}
                style={useStyles.section}
           />

            <SubmitButton label="Submit" onClick={handleSubmit} />

            </form>

            {/* Confirmation Dialog */}
            <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Confirm Submission</DialogTitle>
            <DialogContent>
                <DialogContentText>
                Are you sure you want to submit the form?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                No
                </Button>
                <Button onClick={handleConfirmSubmit} color="primary" autoFocus>
                Yes
                </Button>
            </DialogActions>
            </Dialog>

        </div>
    </div>
    </>
  )
}

export default Form