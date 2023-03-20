import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
// import axios from 'axios';
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbarhome() {
  const { logOut, user } = useUserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#B5DEFC", padding: "10px" }}>
      <Navbar.Brand
        href="/"
        style={{ color: "green", marginLeft: "15px" }}
        className="fs-4"
      >
        Kisaan
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="navbar-text" className="collapse navbar-collapse">
        <Nav className="ms-2 me-0">
          <Nav.Link href="#home">
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link href="#team">about</Nav.Link>
          {user ? (
            <NavDropdown
              title={user.email}
              id="basic-nav-dropdown"
              className="nav-link fs-6 p-0 ms-5"
            >
              <NavDropdown.Item href="# ">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="src\components\Registration.js">
                Role
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
      <Nav className='ms-2 me-0 nav navbar-nav navbar-right ml-auto'>
        <Nav.Link href="#home" className='navbar-nav pull-right'><Link to="/directions">Food Bank Locator</Link></Nav.Link>
        <Nav.Link href="http://127.0.0.1:5500/html_files/youtube_tut.html">Video Based Tutorials</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navbarhome;
