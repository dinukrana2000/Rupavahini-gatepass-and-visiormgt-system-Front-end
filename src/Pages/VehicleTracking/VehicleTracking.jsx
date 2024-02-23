import { Box } from "@mui/system";
import image from "../../Assets/vehicleimage/vehiclebg.jpg";
import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Grid,
  Typography,
  InputLabel,
  FormControl,
  TextField,
  Select,
  MenuItem,
  Button,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
} from "@mui/material";
import { border, color, styled } from "@mui/system";
import { DataGrid, GridToolbar, gridClasses } from "@mui/x-data-grid";
import BasicDatePicker from "../../Components/datepicker/datepicker";
import axios, { Axios } from "axios";
import BasicTimePicker from "../../Components/timepicker/timepicker";
const StyledContainer = styled(Container)({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledPaper = styled(Paper)({
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.8)",
});

const useStyles = {
  form: {
    width: "100%",
  },

  section: {
    marginTop: "2%",
  },
};

const VehicleTracking = () => {
  const [disabled, setDisabled] = useState(true);
  const [tableData, setTableData] = useState({
    vehicleNo: "",
    time: "",
    inOut: "",
  });
  const handleAddNew = () => {
    setDisabled(false);
  };
  const [fetchedData, setFetchedData] = useState([]);
  const fetchDataFromDatabase = () => {
    // Fetch data from the database
    axios
      .get("your-api-endpoint")
      .then((response) => {
        setFetchedData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from the database:", error);
      });
  };

  useEffect(() => {
    fetchDataFromDatabase();
  }, []);
  const handleSubmit = async (e) => {
    try {
      // Send data to the database
      const response = await axios.post("your-api-endpoint", tableData);
      console.log("Data successfully sent to the database:", response.data);
      //console.log("submitted");

      // Reset the form
      setTableData({
        vehicleNo: "",
        time: "",
        inOut: "",
      });
      setDisabled(true);
    } catch (error) {
      console.error("Error submitting data to the database:", error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTableData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // setValidationErrors((prevErrors) => ({
    //   ...prevErrors,
    //   [name]: "",
    // }));
  };

  const handleTimeChange = (time) => {
    setTableData((prevFormData) => ({
      ...prevFormData,
      time: time,
    }));
    // setValidationErrors((prevErrors) => ({
    //   ...prevErrors,
    //   time: "",
    // }));
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: "auto",
        maxWidth: "100%",
      }}
    >
      <Grid container sx={{ width: "100%" }}>
        <StyledContainer maxWidth="lg">
          <StyledPaper elevation={3}>
            <form style={useStyles.form} onSubmit={handleSubmit}>
              <Grid container spacing={2} style={useStyles.section}>
                <Grid item xs={6} display="flex" justifyContent="center">
                  <Typography variant="h6">Vehicle Tracking</Typography>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="center">
                  <BasicDatePicker></BasicDatePicker>
                </Grid>
              </Grid>

              <Grid>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={useStyles.section}
                  onClick={handleAddNew}
                >
                  ADD NEW
                </Button>
              </Grid>

              <Grid container>
                <Grid item xs={3}>
                  <div>Vehicle No</div>
                  <TextField
                    variant="outlined"
                    id="vehicleNo"
                    name="vehicleNo"
                    value={tableData.vehicleNo}
                    onChange={(e) => handleInputChange(e)}
                    disabled={disabled}
                  ></TextField>
                </Grid>
                <Grid item xs={3}>
                  <div>Time</div>
                  <BasicTimePicker
                    id="time"
                    name="time"
                    value={tableData.time}
                    handleTimeChange={(time) => handleTimeChange(time)}
                    disabled={disabled}
                  ></BasicTimePicker>
                </Grid>
                <Grid item xs={3}>
                  <div>In/Out</div>
                  <FormControl>
                    <InputLabel>In/Out</InputLabel>
                    <Select
                      style={{ minWidth: "10rem" }}
                      labelId="inOut"
                      id="inOut"
                      name="inOut"
                      label="In/Out"
                      value={tableData.inOut}
                      onChange={(e) => handleInputChange(e)}
                      disabled={disabled}
                    >
                      <MenuItem value="in">In</MenuItem>
                      <MenuItem value="out">Out</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={3}>
                  <div></div>
                  <Button type="submit" onClick={handleSubmit}>
                    Enter
                  </Button>
                </Grid>
              </Grid>
            </form>
          </StyledPaper>
        </StyledContainer>
      </Grid>
    </Box>
  );
};
export default VehicleTracking;
