import React from 'react'
import { Form, Button, Col, Row } from "react-bootstrap"

import Category from './Fields/Category'
import DateField from './Fields/DateField'
import GenderField from './Fields/GenderField'
import TextFieldCol from './Fields/TextFieldCol'
import TextFieldInline from './Fields/TextFieldInline'
import YesNo from './Fields/YesNo'
import YesNoCol from "./Fields/YesNoCol"
import EmailFieldCol from "./Fields/EmailFieldCol"
import NumField from './Fields/NumField'
import NumFieldCol from "./Fields/NumFieldCol"
import YearField from './Fields/YearField'

export default function DSEForm() {
  return (
    <div>
      <div className="headingBox">
        <h1 style={{textAlign: "center"}}>DSE Registration Form</h1>
      </div>
      <hr />

      <Form>
        <TextFieldInline
          title="Candidate's Name"
          placeholder="Enter Full Name"
          controlId="candidateName"
        />

        <TextFieldInline
          title="Mother's Name"
          placeholder="Enter Full Name"
          controlId="motherName"
        />

        <TextFieldInline
          title="Father's Name"
          placeholder="Enter Full Name"
          controlId="fatherName"
        />

        

        <GenderField controlId="studentGender"/>

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

      </Form>

    </div>
  )
}
