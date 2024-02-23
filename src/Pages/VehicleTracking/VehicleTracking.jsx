import { Box, height } from "@mui/system";
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
import BasicDatePicker from "../../Components/datepicker/datepicker";
import axios, { Axios } from "axios";
import BasicTimePicker from "../../Components/timepicker/timepicker";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import {
  DataGrid,
  GridRowModes,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from "@mui/x-data-grid-generator";
import ResponsiveDrawer from "../../Components/Drawer/Drawer";

const StyledContainer = styled(Container)({
  height: "auto",
  //display: "flex",
  marginTop: "10vh",
  justifyContent: "center",
  alignItems: "center",
  //width: "100vh",
});

const StyledPaper = styled(Paper)({
  padding: "2vh",
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

const roles = ["In", "Out"];
const randomRole = () => {
  return randomArrayItem(roles);
};

const initialRows = [];

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
  const [visitedFields, setVisitedFields] = useState({});

  const handleFieldVisited = (fieldName) => {
    setVisitedFields({ ...visitedFields, [fieldName]: true });
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
    e.preventDefault();
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
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState({});
  const [formData, setFormData] = useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    {
      field: "vehicleNo",
      headerName: "Vehicle No",
      width: 180,
      editable: true,
    },

    {
      field: "time",
      headerName: "Time",
      type: "time",
      width: 180,
      editable: true,
    },
    {
      field: "role",
      headerName: "Department",
      width: 220,
      editable: true,
      type: "singleSelect",
      valueOptions: ["In", "Out"],
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box>
      <ResponsiveDrawer />
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // display: "flex",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          height: "auto",
          maxWidth: "100%",
        }}
      >
        <StyledContainer>
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

              <Grid container spacing={2} style={{ padding: "5vh" }}>
                <Grid item xs={4}>
                  <div>Vehicle No</div>
                  <TextField
                    variant="outlined"
                    id="vehicleNo"
                    name="vehicleNo"
                    value={tableData.vehicleNo}
                    style={{ marginTop: "1vh", minWidth: "15rem" }}
                    onChange={(e) => handleInputChange(e)}
                    disabled={disabled}
                  ></TextField>
                </Grid>
                <Grid item xs={4}>
                  <div>Time</div>
                  <BasicTimePicker
                    id="time"
                    name="time"
                    value={tableData.time}
                    handleTimeChange={(time) => handleTimeChange(time)}
                    onFocus={() => handleFieldVisited("time")}
                    onBlur={() => handleFieldVisited("time")}
                    disabled={disabled}
                  ></BasicTimePicker>
                </Grid>
                <Grid item xs={3}>
                  <div>In/Out</div>
                  <FormControl style={{ marginTop: "1vh" }}>
                    <Select
                      style={{ minWidth: "10rem" }}
                      id="inOut"
                      name="inOut"
                      value={tableData.inOut}
                      onChange={(e) => handleInputChange(e)}
                      disabled={disabled}
                    >
                      <MenuItem value="in">In</MenuItem>
                      <MenuItem value="out">Out</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={1}>
                  <div>
                    <Button
                      type="submit"
                      onClick={handleSubmit}
                      style={{ marginTop: "4vh" }}
                    >
                      Enter
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </form>
            <Box
              sx={{
                height: "40vh",
                width: "100%",
                "& .actions": {
                  color: "text.secondary",
                },
                "& .textPrimary": {
                  color: "text.primary",
                },
              }}
            >
              <DataGrid
                rows={rows}
                columns={columns}
                editMode="row"
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
              />
            </Box>
          </StyledPaper>
        </StyledContainer>
      </Box>
    </Box>
  );
};
export default VehicleTracking;
