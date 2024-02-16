import React, { useState } from "react"
import { TextField, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import './Form.css';
import SubmitButton from "../../Components/Button/SubmitButton";
// import axios from 'axios';
import Drawer from "../../Components/Drawer/Drawer"

const useStyles = { 
    section: {
        marginTop: '5px',
        marginBottom: '10px',
    }
};

function Form() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        schoolname: '',
        grade: '',
        address: '',
        Rname: '',
        designation: '',
        email: '',
        cnumber: '',
        Mstudent: '',
        Fstudent: '',
        noteachers: '',
        noparents: '',
    });

    const [validationErrors, setValidationErrors] = useState({});

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setFormData({
            schoolname: '',
            grade: '',
            address: '',
            Rname: '',
            designation: '',
            email: '',
            cnumber: '',
            Mstudent: '',
            Fstudent: '',
            noteachers: '',
            noparents: '',
        });
        setValidationErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (!formData.schoolname.trim()) {
            errors.schoolname = "School Name is required";
        }
        if (!formData.grade.trim()) {
            errors.grade = "Grade is required";
        } else if (!/^\d+$/.test(formData.grade.trim())) {
            errors.grade = "Grade must contain only numeric digits";
        }
        if (!formData.Rname.trim()) {
            errors.Rname = "Request person's name is required";
        }
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!isValidEmail(formData.email)) {
            errors.email = "Invalid email format";
        }
        if (!formData.cnumber.trim()) {
            errors.cnumber = "Contact number is required";
        } else if (!/^\d+$/.test(formData.cnumber.trim())) {
            errors.cnumber = "Contact number must only have numeric digits"
        } else if (formData.cnumber.length !== 10) {
            errors.cnumber = "Must have 10 numbers";
        }
        if (!formData.Mstudent.trim()) {
            errors.Mstudent = "No of male students is required";
        }
        if (!formData.Fstudent.trim()) {
            errors.Fstudent = "No of female students is required";
        }
        if (!formData.noteachers.trim()) {
            errors.noteachers = "No of teachers is required";
        }
        if (!formData.noparents.trim()) {
            errors.noparents = "No of parents is required";
        }
        if (Object.keys(errors).length > 0){
            setValidationErrors(errors);
        } else {
            handleOpen();
        }
    };

    const handleConfirmSubmit = () => {
        console.log('Form submited!', formData);
        // const response =  axios.post`(http://localhost:4000/api/reservation/filter,formData )`;
        handleClose();
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
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
            <h2>School Details</h2>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="schoolname" 
                    name="schoolname"
                    label="School Name" 
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.schoolname}
                    onChange={handleInputChange}
                    error={!!validationErrors.schoolname}
                    helperText={validationErrors.schoolname}
                    style={useStyles.section}
                />

                <TextField 
                    id="grade" 
                    name="grade"
                    label="Grade" 
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.grade}
                    onChange={handleInputChange}
                    error={!!validationErrors.grade}
                    helperText={validationErrors.grade}
                    style={useStyles.section}
                />

                <TextField 
                    id="address" 
                    name="address"
                    label="Address" 
                    variant="outlined"
                    fullWidth
                    value={formData.address}
                    onChange={handleInputChange}
                    // error={!!validationErrors.address}
                    // helperText={validationErrors.address}
                    style={useStyles.section}
                />

                <TextField 
                    id="Rname" 
                    name="Rname"
                    label="Authorized Request Person's Name" 
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.Rname}
                    onChange={handleInputChange}
                    error={!!validationErrors.Rname}
                    helperText={validationErrors.Rname}
                    style={useStyles.section}
                />  

                <TextField 
                    id="designation" 
                    name="designation"
                    label="Designation" 
                    variant="outlined"
                    fullWidth
                    value={formData.designation}
                    onChange={handleInputChange}
                    // error={!!validationErrors.designation}
                    // helperText={validationErrors.designation}
                    style={useStyles.section}
                />

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                        id="email" 
                        name="email"
                        label="Email" 
                        variant="outlined"
                        fullWidth
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        error={!!validationErrors.email}
                        helperText={validationErrors.email}
                        style={useStyles.section}
                    />
                  </Grid>  
                
                  <Grid item xs={12} sm={6}>
                    <TextField 
                        id="cnumber" 
                        name="cnumber"
                        label="Contact Number" 
                        variant="outlined"
                        fullWidth
                        required
                        value={formData.cnumber}
                        onChange={handleInputChange}
                        error={!!validationErrors.cnumber}
                        helperText={validationErrors.cnumber}
                        style={useStyles.section}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                        id="Mstudent" 
                        name="Mstudent"
                        label="No of male Students" 
                        variant="outlined"
                        type="number"
                        fullWidth
                        required
                        value={formData.Mstudent}
                        onChange={handleInputChange}
                        error={!!validationErrors.Mstudent}
                        helperText={validationErrors.Mstudent}
                        style={useStyles.section}
                    />
                  </Grid>  

                  <Grid item xs={12} sm={6}>
                    <TextField 
                        id="Fstudent" 
                        name="Fstudent"
                        label="No of Female Students" 
                        variant="outlined"
                        type="number"
                        fullWidth
                        required
                        value={formData.Fstudent}
                        onChange={handleInputChange}
                        error={!!validationErrors.Fstudent}
                        helperText={validationErrors.Fstudent}
                        style={useStyles.section}
                    />
                  </Grid>  
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                        id="noteachers" 
                        name="noteachers"
                        label="No of Teachers" 
                        variant="outlined"
                        type="number"
                        fullWidth
                        required
                        value={formData.noteachers}
                        onChange={handleInputChange}
                        error={!!validationErrors.noteachers}
                        helperText={validationErrors.noteachers}
                        style={useStyles.section}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField 
                        id="noparents" 
                        name="noparents"
                        label="No of Parents" 
                        variant="outlined"
                        type="number"
                        fullWidth
                        required
                        value={formData.noparents}
                        onChange={handleInputChange}
                        error={!!validationErrors.noparents}
                        helperText={validationErrors.noparents}
                        style={useStyles.section}
                    />
                  </Grid> 
                </Grid>

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