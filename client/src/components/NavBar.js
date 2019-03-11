import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
  return (
    <Navbar>
      <Navbar.Brand href="/">Deuces</Navbar.Brand>
      <Nav>
        <Nav.Link href='/about'>About</Nav.Link>
        <Nav.Link href='/game_data'>Session Data</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
