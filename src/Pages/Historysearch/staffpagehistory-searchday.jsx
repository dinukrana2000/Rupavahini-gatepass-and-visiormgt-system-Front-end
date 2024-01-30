import React, { useState } from "react";
import "./Request.css";
import Calender from "../../Components/Calender/Cal";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Drawer from "../../Components/Drawer/Drawer";


const Request = () => {
  const [clickedDate, setClickedDate] = useState("");
 
  return (
    <>
    <Drawer/>
    <div>
      <div className="blur-image">
        <Grid container className="con" spacing={2}>
          <Grid item xs={6}>
            <div
              style={{
                marginBottom: "20px",
                padding: "0px",
                fontSize: "30px",
                color: "black",
                marginLeft:"90px"
              }}
            >
              Search for Activity
            </div>
            <div style={{marginLeft:"50px"}}>
              <Calender
                 clickedDate={clickedDate}
                 setClickedDate={setClickedDate}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="request"> 
            <Grid container ></Grid>
            <Grid item xs={6}>{clickedDate}</Grid>
            <Grid item xs={6}><div>
              <Link to={'/search/1/view'}><Button
            variant="contained"
            sx={{
              backgroundColor: "#973535",marginLeft:"20px",
              borderRadius: "20px",width:"100px",height:"4vh",
              "&:hover": {  backgroundColor:"#811F15",color: "#EEC01F" },
            }}
            
          >
            view
          </Button>
          </Link>
          </div></Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
    </>
  );
};

export default Request;
