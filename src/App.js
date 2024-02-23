import React from "react";
import Home from "./Pages/Home/Home";
import User_Login from "./Pages/Login/User_login";
import Staff_Login from "./Pages/Login/Staff_Login";
import Usersignup from "./Pages/signup/usersignup";
import Staffsignup from "./Pages/signup/staffsignup";
import UserReq from "./Pages/UserRequestHome/UserReq";
import Dailyactivity from "./Pages/Dailyactivity/Dailyactivity";
import Forgot from "./Pages/Password/Forgot_Pwd";
import Change from "./Pages/Password/Change_Pwd";
import UserAcc from "./Pages/UserProfile/UserProfileAcc";
import UserAccEdit from "./Pages/UserProfile/UserProfileAccEdit";
import UserAccPwd from "./Pages/UserProfile/UserProfilePwd";
import Visit1 from "./Pages/visit/visit1";
import Visit2 from "./Pages/visit/visit2";
import StaffAcc from "./Pages/UserProfile/StaffProfileAcc";
import StaffAccEdit from "./Pages/UserProfile/StaffProfileAccEdit";
import StaffAccPwd from "./Pages/UserProfile/StaffProfilePwd";
import StaffComplain from "./Pages/staffcomplain/staffcomplain";
import Search from "./Pages/Historysearch/staffpagehistory-searchday";
import Activity from "./Pages/staffpagehistory-activity-view/Activity";
import Request from "./Pages/Request/Request";
import Staff_req from "./Pages/Staffrequest/Staff_req";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import VehicleTracking from "./Pages/VehicleTracking/VehicleTracking";

function App() {
  const user = {
    userName: "Saman kumara",
    fullName: "Saman kumara Ramawikrma",
    email: "Saman_kumara@gmail.com",
    contactNumber: "0713304777",
  };

  const staff = {
    employeeID: "EMP001",
    userName: "sunil perera",
    fullName: "Sunil perera abcd",
    email: "sunilpere@gmail.com",
    contactNumber: "0714859768",
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userlogin" element={<User_Login />} />
          <Route path="/stafflogin" element={<Staff_Login />} />
          <Route path="/usersignup" element={<Usersignup />} />
          <Route path="/staffsignup" element={<Staffsignup />} />
          <Route path="/userreq" element={<UserReq />} />
          <Route path="/dailyactivity" element={<Dailyactivity />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/change" element={<Change />} />
          <Route path="/useracc" element={<UserAcc user={user} />} />
          <Route path="/useraccedit" element={<UserAccEdit user={user} />} />
          <Route path="/useraccpwd" element={<UserAccPwd user={user} />} />
          <Route path="/visit1" element={<Visit1 />} />
          <Route path="/visit2" element={<Visit2 />} />
          <Route path="/search" element={<Search />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/request" element={<Request />} />
          <Route path="/staffacc" element={<StaffAcc user={staff} />} />
          <Route path="/staffaccedit" element={<StaffAccEdit user={staff} />} />
          <Route path="/staffaccpwd" element={<StaffAccPwd user={staff} />} />
          <Route path="/vehicaltraking" element={<VehicleTracking />} />
          <Route path="/staffcomplain" element={<StaffComplain />} />
          <Route path="/staffreq" element={<Staff_req />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
