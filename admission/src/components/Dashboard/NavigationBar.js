import React from "react"
import {Navbar, Container, Nav, NavDropdown, Row, Col} from "react-bootstrap"
import userImage from "./Sample_User_Icon.png"
import "../CSS/Navbar.css"
import { logout } from "../Firebase/logoutuser"
import { useHistory } from "react-router-dom"
import { getAuth } from "firebase/auth"
import bvcoel_logo from "../Images/bvcoe_logo_3.png"

export default function NavigationBar({userType, userName}) {
    const history = useHistory();
    const auth = getAuth();
    async function handleClick(data){
        if (data === "home")
        {
            history.push("/Dashboard")
        }
        if (data === "logout")
        {
            logout();
            await history.push("/");
        }
    }
    return (
        <div>
            <Row className="CollegeInfo">
                <Col md={2}>
                    <img src={bvcoel_logo} width="200px"/>
                </Col>
                <Col md={7}>
                    <Row>
                        <h3>Bharati Vidyapeeth's College of Engineering, Lavale, Pune 412115</h3>
                    </Row>
                    <Row>
                        Affiliated to Savitribai Phule Pune University
                    </Row>
                    <Row>
                        Approved by AICTE,New Delhi and DTE, Government of Maharashtra Mumbai
                    </Row>
                </Col>
                <Col>
                    <h6 className="mt-2">DTE CODE:6796</h6>
                    <h6>NAAC Accredited</h6>
                    <h6>AICTE CII Survey Platinum Category</h6>
                </Col>
            </Row>


            <Navbar expand="lg" className="Navbar-Box" >
                <Navbar.Brand href="#home">BVCOEL College Management System | {userType} View</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => handleClick("home")}>Home</Nav.Link>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="#link">Link</Nav.Link>
                    
                    <Nav.Link><img src={userImage} width="30px" height="30px" /></Nav.Link>
                    <NavDropdown title={""} id="basic-nav-dropdown">
                        <NavDropdown.Item  onClick={() => handleClick("logout")}>Log Out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
        
    )
}