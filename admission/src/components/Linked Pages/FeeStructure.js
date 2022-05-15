import { useState, useEffect } from "react";

import { Button, Tab, Row, Col, Nav, Form } from "react-bootstrap";
import TextField from "../RegistrationForms/Fields/TextField";
import NumField from "../RegistrationForms/Fields/NumField";
import DateField from "../RegistrationForms/Fields/DateField";
import YearField from "../RegistrationForms/Fields/YearField";
import NavigationBar from "../Dashboard/NavigationBar";
import DateFieldInline from "../RegistrationForms/Fields/DateFieldInline";
import "../CSS/Forms.css";


export default function FeeStructure() {

    const [disabled, setDisabled] = useState(false)

    const FeeStructureForm = () => {
        return (
          <div>
            <Form onSubmit={handleSubmit}>
                <YearField
                title="Financial Year"
                controlId="financialYear"
                />
              <NumField
                title="OPEN"
                placeholder="enter fees applicable for OPEN"
                controlId="open"
                maxlength="7"
                isDisabled={disabled}
                size={6}
              />
              <NumField
                title="OTHER THAN MAHARASHTRA"
                placeholder="enter fees applicable for OMS"
                controlId="oms"
                maxlength="7"
                isDisabled={disabled}
                size={6}
              />
              <NumField
                title="OBC/EBC"
                placeholder="enter fees applicable for OBC/EBC"
                controlId="obc/ebc"
                maxlength="7"
                isDisabled={disabled}
                size={6}
              />
              <NumField
                title="SCHEDULED CASTE"
                placeholder="enter fees applicable for SC"
                controlId="sc"
                maxlength="7"
                isDisabled={disabled}
                size={6}
              />
      
              <NumField
                title="ST/NT/VJ/SBC/TFWS"
                placeholder="enter fees applicable for ST/NT/VJ/SBC/TFWS"
                controlId="st/nt"
                maxlength="7"
                isDisabled={disabled}
                size={6}
              />
              <DateFieldInline 
              title="ISSUE DATE" 
              controlId="issueDate"
              size={6}
              />

              <div className="d-flex">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Button className="mx-3" variant="secondary" type="button">
                  Cancel
                </Button>
              </div>
              <div className="pb-3"></div>
            </Form>
          </div>
        );
      };

      async function handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        alert(e)
      };

  return (
    <>
      <NavigationBar userType="Admin" userName="User Name" />

      <div className="row align-items-md-stretch w-100">
        <div className="col-md">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h1>Fee Structure</h1>
            <p>Manage Fee Structure from here</p>
          </div>
        </div>
      </div>
      <hr />

      <div className="wrapper">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3} className="text-white bg-dark">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">First Year</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Direct Secon Year</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} style={{ width: "60%", marginLeft: "auto" }}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="first_year">
                    <h3 className="mb-5 font-weight-bold text-muted">
                      Create First Year Fee Structure
                    </h3>
                    <FeeStructureForm />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="dse">
                    <h3 className="mb-5 font-weight-bold text-muted">
                      Create Direct Second Year Fee Structure
                    </h3>
                    <FeeStructureForm />
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}
