
import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css'



export default function Navbar() {
  return (
    <div className='Content'  >
        <div className="nav" >
            <div className="nav-left">
             
                <div className="home"><Link to="/" id='navb' style={{textDecoration:'none'}}>Home </Link> </div>
            </div>
            <div className="nav-right" >
                <div className="about"> <Link to="/About" id='navb' style={{textDecoration:'none'}}>About </Link></div>
                
                <div className="education"> <Link to="/Qualification" id='navb' style={{textDecoration:'none'}}> Qualification</Link></div>
                
                <div className="cv"><Link to="/Resume" id='navb' style={{textDecoration:'none'}}>Resume </Link></div>
                <div className="contact"><Link to="/Contact" id='navb' style={{textDecoration:'none'}}>Contact </Link></div>
                <div className="Review"><Link to="/Review" id='navb' style={{textDecoration:'none'}}>Reviews </Link></div>

            </div>
        </div>
    </div>
  )
}
