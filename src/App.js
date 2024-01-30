import React from 'react';

/* import Search from './Pages/Historysearch/staffpagehistory-searchday';
import Activity from './Pages/staffpagehistory-activity-view/Activity';
import Dailyactivity from './Components/Pages/Dailyactivity/Dailyactivity';
import Request from './Pages/Request/Request'; */

 //import Home from './Pages/Home/Home';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
//import UserReq from './Pages/UserRequestHome/UserReq';
//import Dumydata from './Pages/UserProfile/Dumydata';
import User_Login from './Pages/Login/User_login';
import Staff_Login from './Pages/Login/Staff_Login';
import Forgot from './Pages/Password/Forgot_Pwd';
import Change from './Pages/Password/Change_Pwd'; 


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
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<User_Login/>} />
      <Route path='/Staff_Login' element={<Staff_Login/>} />
      <Route path='/Forgot' element={<Forgot/>} />
      <Route path='/Change' element={<Change/>} />
    </Routes>
    </BrowserRouter>
    </div> 
  );
}

export default App;
