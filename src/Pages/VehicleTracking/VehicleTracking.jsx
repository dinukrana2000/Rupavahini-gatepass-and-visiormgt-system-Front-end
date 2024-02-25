import { Box, height } from "@mui/system";
import image from "../../Assets/vehicleimage/vehiclebg.jpg";
import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Grid,
  Typography,
  FormControl,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { useFormik } from "formik";
import * as Yup from "yup";
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
  GridToolbar,
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

const VehicleTracking = () => {
  const [showForm, setShowForm] = useState(false);
  const [tableData, setTableData] = useState({
    vehicleNo: "",
    time: new Date(),
    inOut: "",
  });
  const handleAddNew = () => {
    setShowForm(true);
  };
  const [visitedFields, setVisitedFields] = useState({});

  const handleFieldVisited = (fieldName) => {
    setVisitedFields({ ...visitedFields, [fieldName]: true });
  };

  const formik = useFormik({
    initialValues: tableData,

    onSubmit: (values) => {
      console.log("form data", values);
      values.preventDefault();
      addDataToTable(values)
        .then((response) => {
          console.log(response);
          setShowForm(false);
        })
        .catch((error) => {
          console.log(error);
        });
      setTableData({ vehicleNo: "", time: "", inOut: "" });
    },

    validationSchema: Yup.object({
      vehicleNo: Yup.string().trim().required("Required!"),
      inOut: Yup.string().trim().required("Required!"),
    }),
  });

  console.log("form valuesaaaa", formik.touched);

  const [fetchedData, setFetchedData] = useState([]);

  const initialRows = fetchedData;

  const fetchDataFromDatabase = () => {
    getVehicalDetails()
      .then((vehicalDetails) => {
        setFetchedData(vehicalDetails);
      })
      .catch((error) => {
        console.log(error);
      });
    // Fetch data from the database
  };

  useEffect(() => {
    fetchDataFromDatabase();
  }, []);

  const handleTimeChange = (time) => {
    formik.setFieldValue("time", time);
    // const formattedTime = time.format("HH:mm"); // Format time
    // formik.setFieldValue("time", formattedTime); // Set the formatted time value
    //formik.setFieldTouched("time", true, false);
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

  const handleSaveClick = (id, values) => () => {
    console.log(values);
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    updateRowFromTable(id, values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
    deleteRowFromTable(id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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

  //connecting to the backend
  async function getVehicalDetails() {
    let vehicalDetails = [];

    try {
      const response = await axios.get(
        `http://localhost:4000//vehicle/tracking/`
      );

      response?.data?.forEach((vehicalDetail) => {
        vehicalDetails.push({
          vehicleNo: vehicalDetail.vehicleNo,
          inOut: vehicalDetail.inOut,
          time: vehicalDetail.time,
        });
      });
    } catch (error) {
      console.log(error);
    }

    return vehicalDetails;
  }

  async function addDataToTable(values) {
    try {
      const response = await axios.post(
        `http://localhost:4000//vehicle/tracking`,
        values
      );
    } catch (error) {
      console.error("Error!", error);
    }
  }

  async function updateRowFromTable(id, values) {
    let response = null;
    try {
      response = await axios.put(
        `http://localhost:4000//vehicle/tracking/${id}`,
        values
      );
    } catch (error) {
      console.log(error);
    }

    return response;
  }

  async function deleteRowFromTable(id) {
    let response = null;
    try {
      response = await axios.delete(
        `http://localhost:4000//vehicle/tracking/${id}`
      );
    } catch (error) {
      console.log(error);
    }
    return response;
  }

  const columns = [
    {
      field: "id",
      headerName: "id",
      width: 70,
      editable: true,
      headerClassName: "custom-header",
    },

    {
      field: "vehicleNo",
      headerName: "Vehicle No",
      width: 200,
      editable: true,
      headerClassName: "custom-header",
    },

    {
      field: "time",
      headerName: "Time",
      type: "time",
      width: 200,
      editable: true,
      headerClassName: "custom-header",
    },
    {
      field: "inOut",
      headerName: "In/Out",
      width: 150,
      editable: true,
      type: "singleSelect",
      valueOptions: ["In", "Out"],
      headerClassName: "custom-header",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id, params }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id, params.row)}
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
      headerClassName: "custom-header",
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
            <form style={useStyles.form} onSubmit={formik.handleSubmit}>
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
                  variant="contained"
                  style={{ ...useStyles.section, backgroundColor: "#973535" }}
                  onClick={handleAddNew}
                >
                  ADD NEW
                </Button>
              </Grid>
              {showForm && (
                <Grid container spacing={2} style={{ padding: "2vh" }}>
                  <Grid item xs={4}>
                    <div>Vehicle No</div>
                    <div>
                      <TextField
                        variant="outlined"
                        id="vehicleNo"
                        name="vehicleNo"
                        value={formik.values.vehicleNo}
                        style={{ marginTop: "1vh", minWidth: "15rem" }}
                        onChange={formik.handleChange}
                        onBlur={() => handleFieldVisited("vehicleNo")}
                      ></TextField>
                      {formik.touched.vehicleNo && formik.errors.vehicleNo ? (
                        <div style={{ color: "red" }}>
                          {formik.errors.vehicleNo}
                        </div>
                      ) : null}
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div>Time</div>
                    <BasicTimePicker
                      id="time"
                      name="time"
                      value={formik.values.time}
                      handleTimeChange={handleTimeChange}
                    ></BasicTimePicker>
                  </Grid>
                  <Grid item xs={3}>
                    <div>In/Out</div>
                    <div>
                      <FormControl style={{ marginTop: "1vh" }}>
                        <Select
                          style={{ minWidth: "10rem" }}
                          id="inOut"
                          name="inOut"
                          value={formik.values.inOut}
                          onChange={formik.handleChange}
                          onBlur={() => handleFieldVisited("inOut")}
                        >
                          <MenuItem value="in">In</MenuItem>
                          <MenuItem value="out">Out</MenuItem>
                        </Select>
                        {formik.touched.inOut && formik.errors.inOut ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.inOut}
                          </div>
                        ) : null}
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item xs={1}>
                    <div>
                      <Button
                        type="submit"
                        variant="contained"
                        // onClick={handleSubmit}
                        style={{ marginTop: "4vh", backgroundColor: "#973535" }}
                      >
                        Enter
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              )}
            </form>

            <Box
              sx={{
                height: "40vh",
                "& .actions": {
                  color: "text.secondary",
                },
                "& .textPrimary": {
                  color: "text.primary",
                },
                "& .custom-header": {
                  backgroundColor: "white",
                  color: "black", // Change this color as needed
                },
              }}
            >
              <DataGrid
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                rows={rows}
                columns={columns}
                editMode="row"
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                  toolbar: {
                    showQuickFilter: true,
                  },
                }}
              />
            </Box>
            <Grid>
              <Button
                style={{ marginTop: "1vh", backgroundColor: "#973535" }}
                variant="contained"
              >
                Back
              </Button>
            </Grid>
          </StyledPaper>
        </StyledContainer>
      </Box>
    </Box>
  );
};
export default VehicleTracking;
