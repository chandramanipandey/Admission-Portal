import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";
import outlooklogo from "../Assets/Sample_User_Icon.png";
import "../CSS/Navbar.css";
import { useEffect, useState } from "react";
import { logout } from "../Firebase/logoutuser";
import { useHistory } from "react-router-dom";
import { getAuth } from "firebase/auth";
import bvcoel_logo from "../Images/bvcoe_logo_3.png";
import { receiveallstudentfromfirebase } from "../Firebase/receiveallstudentdata";
import { receiveallpendingpaymentsfromfirebase } from "../Firebase/receiveallpendingpayments";
import { getrole } from "../Firebase/role";
import { studentreceivenotice } from "../Firebase/ReceiveNotice";

export default function NavigationBar({ userType, userName }) {
  const [userInfo, setUserInfo] = useState(localStorage.getItem("response"));
  const [role, setRole] = useState();
  const history = useHistory();
  const auth = getAuth();
  const userRole = null;
  const [studentNotice, setStudentNotice] = useState([]);
  var currentClass;
  var department;

  const localUserInfo = JSON.parse(localStorage.getItem("User_Info"));
  if (localUserInfo != null) {
    currentClass = localUserInfo["currentClass"];
    department = localUserInfo["department"];
  }

  const noticeData = [];

  async function fetchStudentNotice() {
    let response = await studentreceivenotice(currentClass, department);
    for (var key in response) {
      noticeData[key] = response[key];
    }
    setStudentNotice(noticeData);
  }

  useEffect(() => {
    fetchStudentNotice();
    // console.log(noticeData);
  }, []);

  async function handleClick(data) {
    if (data === "home") {
      history.push("/Dashboard");
    }

    if (data === "manageUsers") {
      history.push("/ManageUsers");
    }
    if (data === "logout") {
      logout();
      history.push("/", "You have been logged out successfully");
    }
  }
  async function handleLinkclick() {
    window.location.replace("https://outlook.office.com/mail/");
  }

  useEffect(() => {
    const fetchRole = async () => {
      await getrole(auth.currentUser.uid)
        .then((res) => setRole(res))
        .catch((e) => console.error(e));
    };

    setTimeout(() => {
      fetchRole();
    }, 2000);
  }, []);

  return (
    <div>
      <Row className="CollegeInfo">
        <Col md={2}>
          <img src={bvcoel_logo} width="200px" />
        </Col>
        <Col md={8}>
          <Row>
            <h3>
              Bharati Vidyapeeth's College of Engineering, Lavale, Pune 412115
            </h3>
          </Row>
          <Row>Affiliated to Savitribai Phule Pune University</Row>
          <Row>
            Approved by AICTE,New Delhi and DTE, Government of Maharashtra
            Mumbai
          </Row>
        </Col>
        <Col>
          <h6 className="mt-2">DTE CODE : 6796</h6>
          <h6>NAAC Accredited</h6>
          <h6>AICTE CII Survey Platinum Category</h6>
        </Col>
      </Row>

      <Navbar expand="lg" className="Navbar-Box mb-3">
        <Navbar.Brand href="#">
          BVCOEL College Management System | {userType} View
        </Navbar.Brand>
        <Nav className="me-auto">
          {/* <Nav.Link onClick={() => handleClick("home")}>Home</Nav.Link> */}
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Dropdown>
          <Dropdown.Toggle variant="success">
            <span className="mr-2">View Notices</span>
            <i class="fa-regular fa-bell"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* Notice Loop */}
            {Object.keys(studentNotice).map((key, value) => {
              return (
                <Dropdown.Item href="#/action-1">
                  {studentNotice[key].noticeContent}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link>
              <img
                onClick={() => handleLinkclick()}
                src={outlooklogo}
                width="30px"
                height="30px"
              />
            </Nav.Link>
            <NavDropdown title={userName} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => handleClick("logout")}>
                Log Out
              </NavDropdown.Item>
              {role && role[0] == "Admin" ? (
                <NavDropdown.Item onClick={() => handleClick("manageUsers")}>
                  Manage Users
                </NavDropdown.Item>
              ) : null}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
