import React from 'react';
//import UserProfileAcc from './UserProfileAcc';
//import UserProfileAccEdit from './UserProfileAccEdit';
//import UserProfileAccPwd from './UserProfilePwd';
//import StaffProfileAcc from './StaffProfileAcc';
//import StaffProfileAccEdit from './StaffProfileAccEdit';
import StaffProfilePwd from './StaffProfilePwd';

function Dumydata() {
  /*const user = {
    userName: 'Saman kumara',
    fullName: 'Saman kumara Ramawikrma',
    email: 'Saman_kumara@gmail.com',
    contactNumber: '0713304777',
  };*/
  const staff = {
    employeeID: 'EMP001',
    userName: 'sunil perera',
    fullName: 'Sunil perera abcd',
    email: 'sunilpere@gmail.com',
    contactNumber: '0714859768',
  };
  return (
    <div className="App">
    <StaffProfilePwd user={staff} />  
    </div>
  );
}

export default Dumydata;
