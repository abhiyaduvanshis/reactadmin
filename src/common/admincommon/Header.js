import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AuthService from "../../services/Auth.service";
function Header(){
    const Loginuser = AuthService.getCurrentUser();
    return(
        <>
            <div className="col headertop" bg="light" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-lg-10 headertop">
                            <h4 className="pt-3">Welcome</h4>
                        </div>
                        <div className="col col-lg-2 ">
                            <Navbar expand="lg">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <NavDropdown title={Loginuser.fullname} id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;