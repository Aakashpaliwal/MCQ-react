import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// import {HashLink as Link} from 'react-router-hash-link';
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-dark custom-upper-navbar">
    {/* <a className="navbar-brand" href="#">Nikhil Comforts</a> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse">☰</button> 
    <div className="collapse navbar-collapse custom-below-navbar" id="navbar-collapse">
        <ul className="nav navbar-nav">
            <Link to="/"><li className="nav-item active"> <a className="nav-link" href="">Home</a>
            </li></Link>
            <li className="nav-item nav-link">
            <Link to="/About">About</Link>
            </li>
           <li className="nav-item nav-link">
           <Link to ="/Projects"> Projects</Link>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item custom-a-color" href="#"><Link to ="/HVAC">HVAC</Link></a>
                    <a class="dropdown-item" href="#"><Link to ="/Electrical">Electric</Link></a>
                    <a class="dropdown-item" href="#"><Link to ="/Firefighting">Firefighting</Link></a>
                    <a class="dropdown-item" href="#"><Link to ="/Interiors">Interiors</Link></a>
                    <a class="dropdown-item" href="#"><Link to ="/BMS">BMS And Much More</Link></a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#"><Link to ="PHE">Public Health Engineering</Link></a>
                </div>
            </li>
            <li className="nav-item"> <a className="nav-link" href="#"><Link to ="/Career">Career</Link></a>
            </li>
            <li className="nav-item"> <a className="nav-link" href="#"><Link to ="/Blog">Blog</Link></a>
            </li>
        </ul>
    </div>
</nav>

	
        
        
      </div>
    )
  }
}

export default Navbar
