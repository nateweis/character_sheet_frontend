import React from 'react';
import {Outlet, Link} from 'react-router-dom'
import './sidebar.css'

function Sidebar(){

  return(
    <div className='page-container'>
        <div className="sidebar">
            <ul>
                <Link to="home"><li className="nav-link"> Character Sheet </li></Link>
                <li className="nav-link">Profile</li>
                <li className="nav-link">Modifiers</li>
                <Link to="items"><li className="nav-link"> Equipment </li></Link>
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

