import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar =()=>{
return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className='container'>
  <a className="navbar-brand" href="#">CRUD</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item "  >
        <NavLink className="nav-link" exact to="/">Home </NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" exact to="/Register">Register</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" exact to="/User">User</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" exact to="/Login">Social Login</NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>
)
}



export default Navbar;