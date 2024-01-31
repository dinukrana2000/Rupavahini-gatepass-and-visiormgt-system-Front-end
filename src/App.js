import React from 'react';

 //import Search from './Pages/Historysearch/staffpagehistory-searchday';
//import Activity from './Pages/staffpagehistory-activity-view/Activity';
//import Dailyactivity from './Components/Pages/Dailyactivity/Dailyactivity';
//import Request from './Pages/Request/Request'; 

 //import Home from './Pages/Home/Home';
//import { BrowserRouter , Route, Routes } from 'react-router-dom';
//import UserReq from './Pages/UserRequestHome/UserReq';
//import Dumydata from './Pages/UserProfile/Dumydata';
//import User_Login from './Pages/Login/User_login';
//import Staff_Login from './Pages/Login/Staff_Login';
//import Forgot from './Pages/Password/Forgot_Pwd';
//import Change from './Pages/Password/Change_Pwd'; 
import StaffComplain from './Pages/staffcomplain/staffcomplain';


function App() {
  return (

    /* <Routes>
      <Route  path="/" element={<Search/>}/>
      <Route  path="/Search/:id/view" element={<Activity/>}/>
      </Routes>  */

    /* <div>
   <Search/>
   </div>  */

    <div className="App">
    <StaffComplain/>
    </div> 
  );
}

export default App;
