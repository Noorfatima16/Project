import React from 'react'
import {Link} from "react-router-dom"
import './Dashboard.css'

function NavbarComp() {
  return (
    <div >
<nav class="navbar navbar-expand-lg navbar ">
  <div class="container-fluid"  >
    <a class="navbar-brand color" href="#"><Link to="/" style={{color:"white", textDecoration:"none",textAlign:"center",textAlign:"center"}}>Student managment system </Link></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li class="nav-item" >
        <a class="nav-link active style" aria-current="page" href=''><Link to="/Student" style={{color:"white", marginLeft:"220px", textDecoration:"none",textAlign:"center",textAlign:"center"}} >Student</Link></a>          
        </li>

        <li class="nav-item" >
        <a class="nav-link active " aria-current="page" href=""><Link to="/Course" style={{color:"white", marginLeft:"40px", textDecoration:"none",textAlign:"center",textAlign:"center"}}>Course</Link></a>          
        </li>

        <li class="nav-item">
        <a class="nav-link active " aria-current="page" href=""><Link to="/Attendence" style={{color:"white", marginLeft:"40px", textDecoration:"none",textAlign:"center",textAlign:"center"}}>Attendence</Link></a>          
        </li>


        <li class="nav-item" >
        <a class="nav-link active" aria-current="page" href=""><Link   to="/Dashboard" style={{color:"white", marginLeft:"40px", textDecoration:"none",textAlign:"center",textAlign:"center"}}>Dashboard</Link></a>          
        </li>
       

        <li class="nav-item" >
        <a class="nav-link active" aria-current="page" href=""><Link   to="/Students" style={{color:"white", marginLeft:"40px", textDecoration:"none",textAlign:"center",textAlign:"center"}}>Students</Link></a>          
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    
    </div>
  )
}

export default NavbarComp