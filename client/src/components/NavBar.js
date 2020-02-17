import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {LinkContainer} from 'react-router-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <LinkContainer to='/'>
        <Navbar.Brand>Deuces</Navbar.Brand>
      </LinkContainer>
      <Nav>
        <LinkContainer to='/about'>
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/game_data'>
          <Nav.Link>Session Data</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
