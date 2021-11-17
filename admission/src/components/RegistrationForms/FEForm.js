import React from "react"
import { Form, Button, Col, Row } from "react-bootstrap"
import TextField from "./Fields/TextField"
import NumField from "./Fields/NumField"
import NumFieldCol from "./Fields/NumFieldCol"
import GenderField from "./Fields/GenderField"
import DateField from "./Fields/DateField"
import TextFieldInline from "./Fields/TextFieldInline"
import TextFieldCol from "./Fields/TextFieldCol"
import YesNo from "./Fields/YesNo"
// import YesNoInline from "./Fields/YesNoCol"
import YesNoCol from "./Fields/YesNoCol"
import Category from "./Fields/Category"
import EmailFieldInline from "./Fields/EmailFieldInline"
import EmailFieldCol from "./Fields/EmailFieldCol"
import YearField from "./Fields/YearField"
import StudentUndertaking from "./StudentUndertaking"

import { createContext, useState } from "react"

export const FieldsContext = createContext()
export default function FEForm() {

  const FieldsProvider = (props) => {
    const [motherName, setMotherName] = useState("")
    const [studentName, setStudentName] = useState("")

    return (
      <FieldsContext.Provider
        value={{
          motherName: [motherName, setMotherName],
          studentName: [studentName, setStudentName],
        }}
      >
        {props.children}
      </FieldsContext.Provider>
    )
  }

  return (
    <div>
      <h1 className="jumbotron">FE Registration Form</h1>
      <Form>
        <FieldsProvider>
          <TextField
            title="Candidate Name"
            placeholder="Enter Full Name"
            controlId="candidateName"
          />
          <TextField
            title="Mother's Name"
            placeholder="Enter Full Name"
            controlId="motherName"
          />
        </FieldsProvider>

        <GenderField controlId="studentGender" />
        
        <Row>
          <Col>
            <DateField title="DOB" controlId="dob" />
          </Col>
          <Col>
            <TextFieldCol
              title="Place of Birth"
              placeholder="Enter Place of Birth"
              controlId="placeOfBirth"
            />
          </Col>
        </Row>
        
        <YesNo
          title="Phy. Handicapped"
          name="handicappedRadio"
          controlId="phyHandicapped"
        />

        <Category />

        <Row>
          <Col>
            <TextFieldCol
              title="Religion"
              placeholder="Enter your Religion"
              controlId="religion"
            />
          </Col>
          <Col>
            <TextFieldCol
              title="Caste"
              placeholder="Enter caste"
              controlId="casteName"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <YesNoCol
              title="Pass from Maharashtra"
              name="maharashtraPass"
              controlId="maharashtraPass"
            />
          </Col>
          <Col>
            <TextFieldCol
              title="Nationality"
              placeholder="Enter Nationality"
              controlId="nationality"
            />
          </Col>
        </Row>

        <NumField
          title="Enter CET Merit number"
          maxlength="12"
          controlId="cetMeritno"
          placeholder="CET Merit Number (12 digit)"
        />

        <NumField
          title="Aadhar Card number"
          controlId="aadharNo"
          placeholder="Enter 12 digit Aadhar No"
          maxlength="12"
        />

        <NumField
              title="Parents Annual Income(Rs)"
              controlId="parentsAnnualIncome"
              placeholder="Enter in Rs"
              maxlength="15"
        />

        <TextFieldInline
          title="Permanent Address"
          placeholder="Permanent Address here"
          controlId="permanentAddress"
        />

        <Row>
          <Col md>
            <TextFieldCol
              title="City"
              placeholder="for example, Pimpri-Chinchwad"
              controlId="city"
            />
          </Col>
          <Col md>
            <NumFieldCol
              title="Pin Code"
              placeholder="Enter your city Pincode"
              controlId="permanentPin"
            />
          </Col>
        </Row>
        <Row>
          <Col md>
          <TextFieldCol
              title="District"
              placeholder="for example, Pune"
              controlId="district"
            />
          </Col>
          <Col md>
            <EmailFieldCol controlId="permanentEmail" />
          </Col>
        </Row>

        <TextFieldInline
          title="Local Guardian Name"
          placeholder="Enter Name of the Guardian"
          controlId="guardianName"
        />
        <TextFieldInline
          title="Guardian Address"
          placeholder="Enter Address here"
          controlId="guardianAddress"
        />
        <Row>
          <Col md>
            <TextFieldCol
              title="City"
              placeholder="Enter city for Guardian, for example, Pimpri-Chinchwad"
              controlId="guardianCity"
            />
          </Col>
          <Col md>
            <NumFieldCol
                title="Pin Code"
                placeholder="Enter Guardian Address PinCode"
                controlId="guardianPin"
            />
          </Col>
        </Row>

        <Row>
          <Col md>
            <TextFieldCol
                title="District"
                placeholder="for example, Pune"
                controlId="guardianDistrict"
            />  
          </Col>
          <Col md>
            <EmailFieldCol controlId="guardianEmail" />
          </Col>
        </Row>

        <Row>
          <Col>
            <NumFieldCol
              title="Student's Mobile No"
              placeholder="Enter 10 digit Mobile No"
              maxlength="10"
              controlId="studentMobile"
            />
          </Col>
          <Col>
            <NumFieldCol
              title="Parent's Mobile No"
              placeholder="Enter 10 digit Mobile No"
              maxlength="10"
              controlId="parentMobile"
            />
          </Col>
        </Row>

        <TextFieldInline
          title="Name of last institute attended"
          placeholder="Enter Last Institude name"
          controlId="lastInstituteNameFE"
        />
        <TextFieldInline
          title="Institute Address"
          placeholder="Enter last institute address"
          controlId="lastInstituteAddressFE"
        />
        <TextFieldInline
          title="Last Class Studied"
          placeholder="Last Class"
          controlId="lastclassFE"
        />
        <YearField title="Year of Leaving" controlId="yearofLeavingFE" />

        {/* Detailed Marks */}

        <StudentUndertaking />
        <button className="btn-primary" type="submit">Submit</button>
        <br></br>
        <br></br>
      </Form>
    </div>
  )
}
