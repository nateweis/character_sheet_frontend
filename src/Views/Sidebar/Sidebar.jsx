import React from 'react';
import {Outlet, Link} from 'react-router-dom'
import './sidebar.css'

function Sidebar(){

  return(
    <div className='page-container'>
        <div className="sidebar">
            <ul>
                <li className="nav-link"> <Link to="home">Character Sheet</Link> </li>
                <li className="nav-link">Profile</li>
                <li className="nav-link">Modifiers</li>
                <li className="nav-link"> <Link to="items">Equipment</Link> </li>
                <li className="nav-link">Skills</li>
                <li className="nav-link">Attacks</li>
                <li className="nav-link">Magic</li>
            </ul>
        </div>
      <Outlet />
    </div>
  )
}

export default Sidebar

