import React from "react"
import { Form, Button, Col, Row } from "react-bootstrap"
import TextField from "./Fields/TextField"
import NumField from "./Fields/NumField"
import GenderField from "./Fields/GenderField"
import DateField from "./Fields/DateField"
import TextFieldInline from "./Fields/TextFieldInline"
import YesNo from "./Fields/YesNo"
import Category from "./Fields/Category"
import EmailFieldInline from "./Fields/EmailField"
import YearField from "./Fields/YearField"

export default function FEForm() {
  return (
    <div>
      <h1 className="jumbotron">FE Registration Form</h1>
      <Form>
        <TextField title="Candidate Name" placeholder="Enter Full Name" />
        <TextField title="Mother's Name" placeholder="Enter Full Name" />
        <NumField
          title="Enter CET Merit number"
          maxlength="12"
          controlId="CETmeritno"
          placeholder="CET Merit Number (12 digit)"
        />
        <GenderField />
        <DateField title="DOB" name="dob" />
        <TextFieldInline
          title="Place of Birth"
          placeholder="Enter Place of Birth"
        />
        <NumField
          title="Parents Annual Income(Rs)"
          controlId="parentsAnnualIncome"
          placeholder="Enter in Rs"
          maxlength="15"
        />
        <YesNo title="Phy. Handicapped" name="handicappedRadio" />
        <Category />
        <TextFieldInline
          title="Religion"
          placeholder="Enter your Religion"
          controlId="religion"
        />
        <TextFieldInline
          title="Caste"
          placeholder="Enter caste"
          controlId="casteName"
        />
        <YesNo title="Pass from Maharashtra" name="maharashtrapass" />
        <TextFieldInline
          title="Nationality"
          placeholder="Enter Nationality"
          controlId="nationality"
        />
        <NumField
          title="Aadhar Card number"
          controlId="aadharNo"
          placeholder="Enter 12 digit Aadhar No"
          maxlength="12"
        />
        <TextFieldInline
          title="Permanent Address"
          placeholder="Permanent Address here"
          controlId="permanentAddress"
        />
        <Row>
          <Col>
            <TextFieldInline
              title="City"
              placeholder="for example, Pimpri-Chinchwad"
              controlId="city"
            />
          </Col>
          <Col>
            <TextFieldInline
              title="District"
              placeholder="for example, Pune"
              controlId="district"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NumField
              title="Pin Code"
              placeholder="Enter your city Pincode"
              controlId="permanentPin"
            />
          </Col>
          <Col>
            <EmailFieldInline controlId="permanentEmail" />
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
          <Col>
            <TextFieldInline
              title="City"
              placeholder="Enter city for Guardian, for example, Pimpri-Chinchwad"
              controlId="guardianCity"
            />
          </Col>
          <Col>
            <TextFieldInline
              title="District"
              placeholder="for example, Pune"
              controlId="guardianDistrict"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <NumField
              title="Pin Code"
              placeholder="Enter Guardian Address PinCode"
              controlId="guardianPin"
            />
          </Col>
          <Col>
            <EmailFieldInline controlId="guardianEmail" />
          </Col>
        </Row>

        <NumField
          title="Student's Mobile No"
          placeholder="Enter 10 digit Mobile No"
          maxlength="10"
          controlId="studentMobile"
        />
        <NumField
          title="Parent's Mobile No"
          placeholder="Enter 10 digit Mobile No"
          maxlength="10"
          controlId="parentMobile"
        />

        <TextFieldInline
          title="Name of last institute attended"
          placeholder="Enter Last Institude name"
          controlId="lastInstituteNameFE"
        />
        <TextFieldInline
          title="Address"
          placeholder="Enter last institute address"
          controlId="lastInstituteAddressFE"
        />
        <TextFieldInline title="Last Class Studied" placeholder="Last Class" />
        <YearField title="Year of Leaving" controlId="yearofLeavingFE" />

        {/* Detailed Marks */}
      </Form>
    </div>
  )
}
