import { useState, useEffect, useContext } from "react";

import { Button, Tab, Row, Col, Nav, Form } from "react-bootstrap";
import TextField from "../RegistrationForms/Fields/TextField";
import NumField from "../RegistrationForms/Fields/NumField";
import YearField from "../RegistrationForms/Fields/YearField";
import NavigationBar from "../Dashboard/NavigationBar";
import DateFieldInline from "../RegistrationForms/Fields/DateFieldInline";
import { FieldsContext } from "../States/FieldStates";

import "../CSS/Forms.css";

export default function FeeStructure() {
  const [disabled, setDisabled] = useState(true);

  const { 
    financialYearState,
    openState,
    omsState,
    obc_ebcState,
    scState,
    st_ntState,
    issueDateState,
  } = useContext(FieldsContext);

    //Student categories
    const [ financialYear, setFinancialYear ] = financialYearState
    const [ open, setOpen ] = openState
    const [ oms, setOms ] = omsState
    const [ obc_ebc, setObc_ebc ] = obc_ebcState
    const [ sc, setSc ] = scState
    const [ st_nt, setSt_nt ] = st_ntState
    const [ issueDate, setIssueDate ] = issueDateState

    const FormData = {
        financialYear: financialYear,
        open: open,
        oms: oms,
        obc_ebc: obc_ebc,
        sc: sc,
        st_nt: st_nt,
        issueDate: issueDate,
      }


  function handleDisable(event) {
    var id = event.target.id;
    if (id === "cancel") {
      setDisabled(true);
    } else if (id === "edit") {
      setDisabled(false);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(FormData);
  };

  const FeeStructureForm = () => {
    return (
      <div className="col-10">
        <Form onSubmit={handleSubmit}>
          <YearField title="FINANCIAL YEAR" controlId="financialYear" />
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
            controlId="obc_ebc"
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
          isDisabled={disabled}
          />

          <div className="d-flex">
            {disabled ? (
              <Button variant="primary" type="submit" disabled>
                Submit
              </Button>
            ) : (
              <Button variant="primary" type="submit">
                Submit
              </Button>
            )}
            <Button
              className="mx-3"
              variant="secondary"
              type="button"
              id="cancel"
              onClick={(event) => handleDisable(event)}
            >
              Cancel
            </Button>
          </div>
          <div className="pb-3"></div>
        </Form>
      </div>
    );
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
                  <div className="first_year row d-flex">
                    <div className="col-10">
                      <h3 className="mb-5 font-weight-bold text-muted">
                        Create First Year Fee Structure
                      </h3>
                    </div>
                    <div className="col-2 ml-auto">
                      <Button
                        className="mx-3 ml-auto"
                        variant="primary"
                        type="button"
                        id="edit"
                        onClick={(event) => handleDisable(event)}
                      >
                        Edit
                      </Button>
                    </div>

                    <FeeStructureForm />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="dse row d-flex">
                    <div className="col-10">
                      <h3 className="mb-5 font-weight-bold text-muted">
                        Create Direct Second Year Fee Structure
                      </h3>
                    </div>
                    <div className="col-2 ml-auto">
                      <Button
                        className="mx-3 ml-auto"
                        variant="primary"
                        type="button"
                        id="edit"
                        onClick={(event) => handleDisable(event)}
                      >
                        Edit
                      </Button>
                    </div>
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
