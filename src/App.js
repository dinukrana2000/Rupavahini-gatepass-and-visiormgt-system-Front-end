import React from 'react';
import Home from './Pages/Home/Home';
import User_Login from './Pages/Login/User_login';
import Staff_Login from './Pages/Login/Staff_Login';
import Usersignup from './Pages/signup/Usersignup';
import Staffsignup from './Pages/signup/Staffsignup';
import UserReq from './Pages/UserRequestHome/UserReq';
import Dailyactivity from './Pages/Dailyactivity/Dailyactivity';
import Forgot from './Pages/Password/Forgot_Pwd';
import Change from './Pages/Password/Change_Pwd'; 
import UserAcc from './Pages/UserProfile/UserProfileAcc';
import UserAccEdit from './Pages/UserProfile/UserProfileAccEdit';
import UserAccPwd from './Pages/UserProfile/UserProfilePwd';
import Visit1 from './Pages/visit/visit1';
import Visit2 from './Pages/visit/visit2';
import StaffAcc from './Pages/UserProfile/StaffProfileAcc';
import StaffAccEdit from './Pages/UserProfile/StaffProfileAccEdit';
import StaffAccPwd from './Pages/UserProfile/StaffProfilePwd';
import StaffComplain from './Pages/staffcomplain/staffcomplain';
import Search from './Pages/Historysearch/staffpagehistory-searchday';
import Activity from './Pages/staffpagehistory-activity-view/Activity';
import Request from './Pages/Request/Request'; 
import Staff_req from './Pages/Staffrequest/Staff_req';
import Useremailverify from './Pages/signup/Useremailverify';
import Staffemailverify from './Pages/signup/Staffemailverify';
import StaffFogot from './Pages/Password/StaffFogot_Pwd';
import StaffChange from './Pages/Password/StaffChange_Pwd';
import { BrowserRouter , Route, Routes } from 'react-router-dom';







function App() {



  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/userlogin" element={<User_Login/>} />
      <Route path="/stafflogin" element={<Staff_Login/>} />
      <Route path="/usersignup" element={<Usersignup/>} />
       <Route path="/staffsignup" element={<Staffsignup/>} />
      <Route path="/userreq" element={<UserReq/>} />
      <Route path="/dailyactivity" element={<Dailyactivity/>} />
      <Route path="/forgot" element={<Forgot/>} />
      <Route path="/change/:id/:token" element={<Change/>} />
      <Route path="/useracc" element={<UserAcc />} />
      <Route path="/useraccedit" element={<UserAccEdit />} />
      <Route path="/useraccpwd" element={<UserAccPwd />} />
      <Route path="/visit1" element={<Visit1/>} />
      <Route path="/visit2" element={<Visit2/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/activity" element={<Activity/>} />
      <Route path="/request" element={<Request/>} />
      <Route path="/staffacc" element={<StaffAcc />} />
      <Route path="/staffaccedit" element={<StaffAccEdit />} />
      <Route path="/staffaccpwd" element={<StaffAccPwd />} />
      <Route path="/useremailverify" element={<Useremailverify/>} />
      <Route path="/staffcomplain" element={<StaffComplain/>} />
      <Route path="/staffreq" element={<Staff_req/>} />
      <Route path="/staffemailverify" element={<Staffemailverify/>} />
      <Route path="/staffforgot" element={<StaffFogot/>} />
      <Route path="/staffchange/:id/:token" element={<StaffChange/>} />
      </Routes>
  </BrowserRouter>

    </div> 
  );
}

export default App;
