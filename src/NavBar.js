import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink 
            to="/" 
            style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} // Style active link
          >
            Vending Machine
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/soda"
            style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
          >
            Soda
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/chips"
            style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
          >
            Chips
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/candy"
            style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
          >
            Candy
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;