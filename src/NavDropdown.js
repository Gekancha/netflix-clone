
import React from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route, Link
//   } from 'react-router-dom';
  import Profile from './Profile';
  import './Nav.css';
import { useHistory } from 'react-router-dom';

function NavDropdown() {
    const history = useHistory();


    return (
        
        <div class="dropdown-content">
       {/* <button 
       onClick ={() => history.push("/Profile")}
      > 
       Profile </button> */}
        <Profile /> 
        <p className="view" onClick ={() => history.push("/Profile")}> view </p>
       
        </div>
  


       
    )
}

export default NavDropdown ;
