import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';

import { NavLink } from 'react-router-dom';
 export default function Header(props) {
 

    return (
        <>
          <Navbar className='d-flex ' expand="lg">
      <Container>
        <Navbar.Brand href="/" className="text-decoration-none text-dark fs-3 me-5 fw-bold">Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-dark fs-3" >  <a id="hom"> Home</a></NavLink>
            <NavLink to="/favorites" className="text-decoration-none text-dark fs-3 ms-3"> <a id="hom">Favorites</a></NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
