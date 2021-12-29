import React from 'react';
import {Outlet, Link} from 'react-router-dom'

function Sidebar(){

  return(
    <div>
      <ul>
          <li> <Link to="home">Character Sheet</Link> </li>
          <li>Profile</li>
          <li>Modifiers</li>
          <li> <Link to="items">Equipment</Link> </li>
          <li>Skills</li>
          <li>Attacks</li>
          <li>Magic</li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Sidebar

