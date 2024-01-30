import React, {useEffect, useState} from "react";
import "./Request.css";
import Grid from '@mui/material/Grid';
import Alert from "../../Components/Alert/Alert";
import Drawer from "../../Components/Drawer/Drawer"; 
import axios from "axios";

const Request = () => {
 
  const [visitRequests, setVisitRequests] = useState([]);
  const [appoinmentRequests, setAppoinmentRequests] = useState([]);
const handleDeleteRequest = (requestId,type) => {

  if(type==='visit')
  {
    const updatedRequests = visitRequests.filter(request => request._id !== requestId);
  
    setVisitRequests(updatedRequests);
  }
  else{
    const updatedRequests = appoinmentRequests.filter(request => request._id !== requestId);
  
    setAppoinmentRequests(updatedRequests);
  }
 
};
useEffect(()=>async()=>{
await axios.get('http://localhost:4000/user/:username')
.then(response => {
    // Handle the response data
    console.log(response.data); // Assuming response.data is an array of requests
    setVisitRequests(response.data); // Assuming response.data is the array of requests from your database
})
.catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
});
},[])

useEffect(()=>async()=>{
  await axios.get('http://localhost:4000/appointmentreq/:username1')
  .then(response => {
      // Handle the response data
      console.log(response.data); // Assuming response.data is an array of requests
      setAppoinmentRequests(response.data); // Assuming response.data is the array of requests from your database
  })
  .catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
  });
  },[])
  

  return (
    <>
    <Drawer/> 
    <div>
      <div className="blur-image">
     {visitRequests.map(request => (
        <div className="rectangle-col" key={request._id}>
        <Grid container className="rectangle" spacing={0}>
      <Grid item xs={12} sm={6}  >
        <div className="request">{request.dateofArrival.split('T')[0]}    {request.timeslot}    {request.category}</div>
      

      </Grid>
      <Grid item xs={12} sm={6}  textAlign="right">
        <div className="cancel"><Alert requestId={request._id} type={'visit'} onDelete={handleDeleteRequest}/></div>
        
      </Grid>
    </Grid>
        </div>
      ))} 
     {appoinmentRequests.map(request => (
        <div className="rectangle-col" key={request._id}>
        <Grid container className="rectangle" spacing={0}>
      <Grid item xs={12} sm={6}  >
        <div className="request">{request.appoinmentDate.split('T')[0]}  {request.appoinmentTime}  {request.requesterName}</div>
      

      </Grid>
      <Grid item xs={12} sm={6}  textAlign="right">
        <div className="cancel"><Alert requestId={request._id} type={'appointment'}  onDelete={handleDeleteRequest}/></div>
        
      </Grid>
    </Grid>
        </div>
      ))} 
      </div>
      </div>
      </>
  );
};

export default Request;
