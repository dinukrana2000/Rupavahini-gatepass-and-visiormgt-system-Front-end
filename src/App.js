import React from 'react';
/* //import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import UserReq from './Pages/UserRequestHome/UserReq';
//import Dumydata from './Pages/UserProfile/Dumydata';
import User_Login from './Pages/Login/User_login';
import Staff_Login from './Pages/Login/Staff_Login';
import Forgot from './Pages/Password/Forgot_Pwd';
import Change from './Pages/Password/Change_Pwd'; */
import Request from './Pages/Request/Request';
function App() {
  return (
    <div>
   <Request/>
   </div>
   /*  <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<User_Login/>} />
      <Route path='/Staff_Login' element={<Staff_Login/>} />
      <Route path='/Forgot' element={<Forgot/>} />
      <Route path='/Change' element={<Change/>} />
    </Routes>
    </BrowserRouter>
    </div> */
  );
}

export default App;
