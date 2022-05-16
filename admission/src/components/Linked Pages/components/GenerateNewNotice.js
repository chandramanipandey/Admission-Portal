import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { admingeneratenotice } from "../../Firebase/GenerateNotice";
import { getAuth } from "firebase/auth";
import { useHistory } from "react-router-dom";

export default function GenerateNewNotice() {
  const auth = getAuth();
  const history = useHistory();

  const [userauth, setuserauth] = useState(undefined);

  const [FE, setFENotice] = useState(false);
  const [SE, setSENotice] = useState(false);
  const [TE, setTENotice] = useState(false);
  const [BE, setBENotice] = useState(false);
  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeContent, setNoticeContent] = useState("");
  const [department, setDepartment] = useState("Computer");

  // useEffect(() => {
  //   try {
  //     setuserauth(auth.currentUser.uid)
  //   }
  //   catch (e) {
  //     console.log('Generate Notice error')
  //     history.push('/', "You are not authorised to visit this website, if you are an authorised user please login to continue");
  //   }
  // }, [auth])

  function handleChange(e, controlId) {
    switch (controlId) {
      case "noticeTitle":
        setNoticeTitle(e.target.value);
        break;
      case "noticeContent":
        setNoticeContent(e.target.value);
        console.log(noticeContent);
        break;
      case "department":
        setDepartment(e.target.value);
        console.log(department);
        break;
      case "FECheck":
        setFENotice(!FE);
        console.log(FE);
        break;
      case "SECheck":
        setSENotice(!SE);
        console.log(SE);
        break;
      case "TECheck":
        setTENotice(!TE);
        console.log(TE);
        break;
      case "BECheck":
        setBENotice(!BE);
        console.log(BE);
        break;
      default:
        console.log("No match case for Checkbox");
    }
  }

  function handleGenerate(e) {
    e.preventDefault();
    const noticeData = {
      FE,
      SE,
      TE,
      BE,
      noticeTitle,
      noticeContent,
      department,
    };

    admingeneratenotice(auth.currentUser.uid, noticeData);
    console.log("Generated");
  }

  return (
    <div className="mb-3">
      <div className="p-2">
        <h4 className="p-2">Generate New Notice</h4>
        <hr />

        <Form onSubmit={handleGenerate}>
          <Form.Group>
            <Form.Row>
              <Form.Label column md={1} className="mx-3">
                Title
              </Form.Label>
              <Col md>
                <Form.Control
                  placeholder="Enter Title for the notice"
                  onChange={(e) => handleChange(e, "noticeTitle")}
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Form.Label column md={1} className="mx-3">
                Content
              </Form.Label>
              <Col md>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter notice content"
                  onChange={(e) => handleChange(e, "noticeContent")}
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Form.Label column md={1} className="mx-3">
                For Year
              </Form.Label>
              <Col md className="">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={(e) => handleChange(e, "FECheck")}
                />
                <label class="form-check-label" for="FECheckbox">
                  FE
                </label>
              </Col>
              <Col>
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={(e) => handleChange(e, "SECheck")}
                />
                <label class="form-check-label" for="SECheckbox">
                  SE
                </label>
              </Col>
              <Col>
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={(e) => handleChange(e, "TECheck")}
                />
                <label class="form-check-label" for="TECheckbox">
                  TE
                </label>
              </Col>
              <Col>
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={(e) => handleChange(e, "BECheck")}
                />
                <label class="form-check-label" for="BECheckbox">
                  BE
                </label>
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Form.Label column md={1} className="mx-3">
                For Department
              </Form.Label>
              <Col md>
                <Form.Control
                  as="select"
                  onChange={(e) => handleChange(e, "department")}
                >
                  <option value="Computer">Computer</option>
                  <option value="ENTC">
                    Electronics and Telecommunication
                  </option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Civil">Civil</option>
                </Form.Control>
              </Col>
            </Form.Row>
          </Form.Group>
          <Button className="mx-3" variant="success" type="submit">
            Generate
          </Button>{" "}
        </Form>
        <hr />
      </div>
    </div>
  );
}
