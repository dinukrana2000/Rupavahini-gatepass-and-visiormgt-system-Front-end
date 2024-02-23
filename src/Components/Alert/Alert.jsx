import React, { useState} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import "./Alert.css";

const Alert = ({ requestId,type,onDelete }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleDelete = () => {
      // Call onDelete with the requestId when "ok" is clicked
      onDelete(requestId,type);
      setOpen(false); // Close the dialog
  };
    const paperStyle = {
      backgroundColor: 'white',
      width:'500px',
      maxHeight:'500px'
     
       
    };
  return (

    //cancel buttons with popup msg
    <>
    <Button
            variant="contained"
            sx={{
              backgroundColor: "#973535",marginLeft:"20px",
              borderRadius: "20px",width:"150px",
              "&:hover": {  backgroundColor:"#811F15",color: "#EEC01F" },
            }}
            onClick={handleClickOpen}
          >
            Cancel
          </Button>
    <Dialog  open={open} onClose={handleClose}
     aria-labelledby='dialog-title' aria-describedby='dialog-description'
     PaperProps={{ style: paperStyle }} >
      <DialogTitle id='dialog-title'> 
        cancel request
      </DialogTitle >
      <DialogContent>
        <DialogContentText id='dialog-description'>
        Do You wish to cancel
the selected request ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{color:"white",
              backgroundColor: "#973535",marginLeft:"20px",
              borderRadius: "20px",width:"150px",
              "&:hover": {  backgroundColor:"#811F15",color: "#EEC01F" },
            }}>cancel</Button>
        <Button onClick={handleDelete} sx={{color:"white",
              backgroundColor: "#973535",marginLeft:"20px",
              borderRadius: "20px",width:"150px",
              "&:hover": {  backgroundColor:"#811F15",color: "#EEC01F" },
            }} autoFocus >
          ok
        </Button>
      </DialogActions>
    </Dialog>
    </>
  )
}

export default Alert