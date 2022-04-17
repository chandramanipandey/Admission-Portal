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
import YesNoCol from "./Fields/YesNoCol"
import Category from "./Fields/Category"
import EmailFieldInline from "./Fields/EmailFieldInline"
import EmailFieldCol from "./Fields/EmailFieldCol"
import YearField from "./Fields/YearField"
import StudentTerms from "./StudentTerms"
import RadioField from "./Fields/RadioField"

import StudentUndertaking from "./StudentUndertaking"
import ParentUndertaking from "./ParentUndertaking"

import { createContext, useState } from "react"

import "../CSS/FEForm.css"

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
      <div className="headingBox">
        <h1 style={{textAlign: "center"}}>FE/DSE Registration Form</h1>
      </div>
      <hr />

      <Form>
        <RadioField title="Cadidate Admission" 
          option1="First Year(F.E)" 
          option2="Direct Second Year(D.S.E)" 
          name="candidateAdmission" 
          controlId="candidateAdmission" 
        />

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

        <TextFieldInline
          title="Father's Name"
          placeholder="Enter Full Name"
          controlId="fatherName"
        />

        <Row>
          <Col md>
            <GenderField controlId="studentGender" />
          </Col>
          <Col md>
            <NumFieldCol
              title="Age"
              maxlength="3"
              controlId="age"
              placeholder="Enter your Age"
            />
          </Col>
        </Row>
        
        <Row>
          <Col md>
            <DateField title="DOB" controlId="dob" />
          </Col>
          <Col md>
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
          <Col md>
            <TextFieldCol
              title="Religion"
              placeholder="Enter your Religion"
              controlId="religion"
            />
          </Col>
          <Col md>
            <TextFieldCol
              title="Caste"
              placeholder="Enter caste"
              controlId="casteName"
            />
          </Col>
        </Row>


        <Row>
          <Col md>
            <YesNoCol
              title="Pass from Maharashtra"
              name="maharashtraPass"
              controlId="maharashtraPass"
            />
          </Col>
          <Col md>
            <TextFieldCol
              title="Nationality"
              placeholder="Enter Nationality"
              controlId="nationality"
            />
          </Col>
        </Row>

        <YesNo 
          title="Do you have MHTCET Score?"
          name="mhtcet"
          controlId="mhtcet"
        />

        <YesNo 
          title="Do you have JEE Mains Score?"
          name="jeeMains"
          controlId="jeeMains"
        />
        
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

        <YesNo
          title="Do you have PAN Card?"
          name="hasPAN"
          controlId="hasPAN"
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

        <NumField
          title="Guardian's Mobile No"
          placeholder="Enter 10 digit Mobile No"
          maxlength="10"
          controlId="guardianMobile"
        />

        <NumField
          title="Student's Mobile No"
          placeholder="Enter 10 digit Mobile No"
          maxlength="10"
          controlId="studentMobile"
        />

        <Row>
          <Col>
            <NumFieldCol
              title="Mother's Mobile No"
              placeholder="Enter 10 digit Mobile No"
              maxlength="10"
              controlId="motherMobile"
            />
          </Col>
          <Col>
          <NumFieldCol
              title="Father's Mobile No"
              placeholder="Enter 10 digit Mobile No"
              maxlength="10"
              controlId="fatherMobile"
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

        <StudentTerms />
        <div style={{padding: "20px 0"}}>
          <Button variant="primary">Submit</Button>{' '}
        </div>

        <StudentUndertaking />
        <ParentUndertaking />
        <Button variant="primary">Submit</Button>{' '}
        <br></br>
        <br></br>
      </Form>
    </div>
  )
}

// nice
