import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/'>Home</NavLink> | 
      <NavLink to='/about'>About</NavLink> |
      <NavLink to='/game_data'>Game Data</NavLink>

    </div>
  );
};

export default NavBar;
