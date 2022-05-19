import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getAuth } from "firebase/auth";
import NavigationBar from "../../Dashboard/NavigationBar";
import { onAuthStateChanged } from "firebase/auth";
import { Modal } from "react-bootstrap";
import { Tabs, Tab, ListGroup, Card, Button } from "react-bootstrap";

import "../../CSS/StudentDetail.css";
import avatar from "../../Assets/avatar.png";

export default function StudentDetail(props) {
  const auth = getAuth();
  const history = useHistory();
  const { prn } = useParams();
  const [userauth, setuserauth] = useState(undefined);
  const [userImage,setuserImage] = useState(avatar);
  
  const [userAdmissionData, setuserAdmissionData] = useState(
    props.location.state.data
  );


  const [marksheetImage, setMarksheetImage] = useState();
  const [show, setShow] = useState(false);

  function handleViewMarksheet(studentMarksheet) {
    setMarksheetImage(studentMarksheet);
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  useEffect(() => {
    try {
      auth.onAuthStateChanged((authobj) => {
        if (authobj) {
          setuserauth(authobj.uid);
        } else {
          history.push(
            "/",
            "You are not authorised to visit this website or you have recently logged out successfully, if you are an authorised user please login to continue"
          );
        }
        if(userAdmissionData.studentImage!="Not_Uploaded"){
         if(userAdmissionData.studentImage!=undefined){
           setuserImage(userAdmissionData.studentImage)
         }
        }
      });
    } catch (e) {
      console.log(e);
    }
  }, []);
  console.log("data", userAdmissionData);
  return (
    <>
      <NavigationBar userType="Admin" userName="User Name" />
      {/* {console.log('studentdetail page',)} */}
      <div className="row align-items-md-stretch w-100">
        <div className="col-md">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h1>Students List</h1>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------------------------------------------------- */}
      <div className="container-fluid">
        <div className="row">
          <div className="profile-nav col-md-3">
            <div className="panel">
              <div className="user-heading round">
                <a href="#">
                  <img src={userImage} alt="" />
                </a>
                <h1>{userAdmissionData.studentName}</h1>
                <h3>{userAdmissionData.department}</h3>
                <h4>{userAdmissionData.currentClass}</h4>
              </div>
              <ListGroup as="ul">
                <ListGroup.Item as="li" Active>
                  <a href="#">
                    {" "}
                    <i className="fa fa-user" /> Fees Payments
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <a href="#">
                    {" "}
                    <i className="fa fa-calendar" /> Recent Activity{" "}
                    <span className="label label-success pull-right r-activity">
                      9
                    </span>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <a href="#">
                    {" "}
                    <i className="fa fa-edit" /> Edit profile
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
          <div className="profile-info col-md-9">
            <Card className="canvas">
              {/* <div className="bio-graph-heading">graphs</div> */}
              <div className="panel-body bio-graph-info">
                <h1 className="dark font-weight-bold mt-2">General Details</h1>
                <hr class="style1"></hr>

                <div className="row">
                  <div className="bio-row">
                    <p>
                      <span>Name </span>: {userAdmissionData.studentName}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Prn </span>: {userAdmissionData.prn}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Department </span>: {userAdmissionData.department}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Email </span>: {userAdmissionData.collegeEmail}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Gender </span>: {userAdmissionData.studentGender}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Birthday</span>: {userAdmissionData.dob}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Mobile </span>: {userAdmissionData.studentMobile}
                    </p>
                  </div>

                  <div className="bio-row">
                    <p>
                      <span>Phone </span>: 88 (02) 123456
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            <div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="bio-card dark font-weight-bold">
                        <h4 className="dark font-weight-bold">
                          Student Address
                        </h4>
                        <hr class="style1"></hr>
                        <p>Present : {userAdmissionData.permanentAddress}</p>
                        <p>Pincode : {userAdmissionData.permanentPin}</p>
                        <p>District : {userAdmissionData.district}</p>

                        <p>Permanent : {userAdmissionData.permanentAddress}</p>
                        <p>Pincode : {userAdmissionData.permanentPin}</p>
                        <p>District : {userAdmissionData.district}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="bio-card">
                        <h4 className="dark font-weight-bold text-muted">
                          Personal Details
                        </h4>
                        <hr class="style1"></hr>
                        <div className="d-flex row">
                          <div className="col-4">
                            <p>Nationality</p>
                            <h5 className="font-weight-bold">
                              {userAdmissionData.nationality}
                            </h5>
                          </div>
                          <div className="col-4">
                            <p>Category</p>
                            <h5 className="font-weight-bold">
                              {userAdmissionData.category}
                            </h5>
                          </div>
                          <div className="col-4">
                            <p>Religion</p>
                            <h5 className="font-weight-bold">
                              {userAdmissionData.religion}
                            </h5>
                          </div>
                        </div>
                        <br />
                        <div className="d-flex row">
                          <div className="col-4">
                            <p>Handicapped ?</p>
                            <h6 className="font-weight-bold">
                              {userAdmissionData.phyHandicapped === false
                                ? "No"
                                : "Yes"}
                            </h6>
                          </div>
                          <div className="col-4">
                            <p>Place Of Birth</p>
                            <h6 className="font-weight-bold">
                              {userAdmissionData.placeOfBirth}
                            </h6>
                          </div>
                          <div className="col-4">
                            <p>Aadhar Number</p>
                            <h6 className="font-weight-bold">
                              {userAdmissionData.aadharNo}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body d-flex row">
                      <h4 className="dark font-weight-bold text-muted">
                        Parents Details
                        <hr class="style1"></hr>
                      </h4>
                      <div className="bio-desk">
                        <p>
                          <b>Father Name :</b>
                          {userAdmissionData.fatherName}
                        </p>
                        <p>
                          <b>Phone : </b>
                          {userAdmissionData.fatherMobile}
                        </p>
                        <p>
                          <b>Mother Name : </b>
                          {userAdmissionData.motherName}
                        </p>
                        <p>
                          <b>Phone : </b>
                          {userAdmissionData.motherMobile}
                        </p>
                      </div>
                      <div className="bio-desk">
                        <p>
                          <b>Anual Income : </b>
                          {userAdmissionData.parentsAnnualIncome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="bio-card dark font-weight-bold">
                        <h4 className="dark font-weight-bold">Marksheets</h4>
                        <hr class="style1"></hr>
                        <p>
                          SSC Marksheet :{" "}
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={(e) =>
                              handleViewMarksheet(
                                userAdmissionData.sscmarksheet
                              )
                            }
                            // onClick={
                            //   "https://firebasestorage.googleapis.com/v0/b/college-manageme…SSC.jpg?alt=media&token=97e3ab5a-64c7-4d4d-9e5b-591b8dd5f802"
                            // }
                          >
                            VIEW
                          </button>
                        </p>
                        <p>
                          HSC Marksheet :{" "}
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={(e) =>
                              handleViewMarksheet(
                                userAdmissionData.hscmarksheet
                              )
                            }
                          >
                            VIEW
                          </button>
                        </p>
                        <p>
                          CET Marksheet :{" "}
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={(e) =>
                              handleViewMarksheet(
                                userAdmissionData.cetmarksheet
                              )
                            }
                          >
                            VIEW
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal size="lg" show={show}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Receipt</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src={marksheetImage} width="700px" />
        </Modal.Body>
        <Modal.Footer className="text-center">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

{
  /* <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="bio-chart">
                          <div
                            style={{
                              display: "inline",
                              width: "100px",
                              height: "100px",
                            }}
                          >
                            <canvas width={100} height="100px" />
                            <input
                              className="knob"
                              data-width={100}
                              data-height={100}
                              data-displayprevious="true"
                              data-thickness=".2"
                              defaultValue={35}
                              data-fgcolor="#e06b7d"
                              data-bgcolor="#e8e8e8"
                              style={{
                                width: "54px",
                                height: "33px",
                                position: "absolute",
                                verticalAlign: "middle",
                                marginTop: "33px",
                                marginLeft: "-77px",
                                border: "0px",
                                fontWeight: "bold",
                                fontStyle: "normal",
                                fontVariant: "normal",
                                fontStretch: "normal",
                                fontSize: "20px",
                                lineHeight: "normal",
                                fontFamily: "Arial",
                                textAlign: "center",
                                color: "rgb(224, 107, 125)",
                                padding: "0px",
                                WebkitAppearance: "none",
                                background: "none",
                              }}
                            />
                          </div>
                        </div>
                        <div className="bio-desk">
                          <h4 className="red">Envato Website</h4>
                          <p>Started : 15 July</p>
                          <p>Deadline : 15 August</p>
                        </div>
                      </div>
                    </div>
                  </div> */
}
