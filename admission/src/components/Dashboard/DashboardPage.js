import React, { useEffect, useState } from "react"
import { Card, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../CSS/DashboardPage.css"
import { useHistory, Link } from "react-router-dom";
import { receivefromfirebase } from "../Firebase/receivefromfirebase";
import { getAuth } from "firebase/auth";

export function AdminDashboardPage() {
    
    return (
        <div>
            <Row>
                <Col>
                <Link to={"/StudentList"}>
                    <Card body><h1>Total Students 50</h1>
                        <p></p><br />
                        <a className="primary">See list of Students &gt;</a>
                    </Card>
                </Link>
                    
                </Col>
                <Col>
                <Link to={"#"}>
                    <Card body ><h1>Student Fees</h1>
                        <p></p><br />
                        <a className="primary">Check Fees &gt;</a>
                    </Card>
                </Link>     
                </Col>

                <Col>
                <Link to={"#"}>
                    <Card body ><h1>Fees Tracking</h1>
                    <p></p><br />
                    <a className="primary">Track Fees &gt;</a>
                    </Card>
                </Link>
                </Col>
            </Row>
        </div>
    )
}

export function StudentDashboardPage() {
    const history = useHistory();
    const auth = getAuth();
    
    async function handleClick(data) {
        const studentData = await receivefromfirebase(auth.currentUser.uid,"Admission_Data");
        console.log(studentData);
        
        if (data == "fedseform") {
            history.push('/fedseform');
        }

        if (data == "MyProfile") {
            history.push('/MyProfile')
        }
        
        if (data == "FeesDetails") {
            history.push('/FeesDetails')
        }
        
    }
    return (
        <div>       
            <Row>
                <Col>
                <Link to={"/fedseform"}>
                <Card body>
                        <h1>Register Yourself</h1>
                        <br></br>
                        <br></br>
                        <a href="#" onClick={() => handleClick("fedseform")}>Registration Form Link &gt;</a>
                    </Card>
                </Link>
                    
                </Col>
                <Col>
                <Link to={"/FeesDetails"}>
                <Card body>
                        <h1>Fees Corner</h1>
                        <br></br>
                        <br></br>
                        <a href="#" onClick={() => handleClick("FeesDetails")}>Fill Fee Details &gt;</a>
                    </Card>
                </Link>
                    
                </Col>
                <Col>
                <Link to={"/MyProfile"}>
                <Card body>
                        <h1>My Profile</h1>
                        <br></br>
                        <br></br>
                        <a onClick={() => handleClick("MyProfile")}>Check Profile &gt;</a>
                    </Card>
                </Link>
                    
                </Col>
            </Row>
        </div>
    )
}