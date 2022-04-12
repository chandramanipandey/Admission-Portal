import React from "react"
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import userImage from "./Sample_User_Icon.png"
import "../CSS/Navbar.css"

export default function NavigationBar({userType, userName}) {
    return (
        <div>
            <Navbar expand="lg" className="Navbar-Box" >
                <Navbar.Brand href="#home">BVCOEL College Management System | {userType} View</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="#link">Link</Nav.Link>
                    
                    <Nav.Link><img src={userImage} width="30px" height="30px" /></Nav.Link>
                    <NavDropdown title={userName} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Log Out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
        
    )
}