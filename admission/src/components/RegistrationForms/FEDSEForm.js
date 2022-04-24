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
export default function FEDSEForm() {

  // FieldsProvider Function for FieldsContext
  const FieldsProvider = (props) => {
    const [motherName, setMotherName] = useState("")
    const [studentName, setStudentName] = useState("")
    const [candidateAdmission, setCandidateAdmission] = useState("")

    const [permanentAddress, setPermanentAddress] = useState("")
    const [guardianName, setGuardianName] = useState("")
    const [guardianAddress, setGuardianAddress] = useState("")
    const [lastInstituteNameFE, setLastInstituteNameFE] = useState("")
    const [lastInstituteAddressFE, setLastInstituteAddressFE] = useState("")
    const [lastClassFE, setLastClassFE] = useState("")
    const [fatherName, setFatherName] = useState("")

    const [studentGender, setStudentGender] = useState("")

    const [permanentPin, setPermanentPin] = useState("")
    const [guardianPin, setGuardianPin] = useState("")
    const [studentMobile, setStudentMobile] = useState("")
    const [motherMobile, setMotherMobile] = useState("")
    const [fatherMobile, setFatherMobile] = useState("")

    const [dob, setDob] = useState("")
// Working fine till here

    const [placeOfBirth, setPlaceOfBirth] = useState("")
    const [religion, setReligion] = useState("")
    const [casteName, setCasteName] = useState("")
    const [nationality, setNationality] = useState("")
    const [city, setCity] = useState("")
    const [district, setDistrict] = useState("")
    const [guardianCity, setGuardianCity] = useState("")
    const [guardianDistrict, setGuardianDistrict] = useState("")

    const [phyHandicapped, setPhyHandicapped] = useState(false)
    const [maharashtraPass, setMaharashtraPass] = useState(false)
    const [hasPAN, setHasPAN] = useState(false)
    const [hasGivenMHTCET, setHasGivenMHTCET] = useState(false)
    const [CETScore, setCETScore] = useState("")
    const [hasGivenJEEMains, setHasGivenJEEMains] = useState(false)
    const [JEEMainsScore, setJEEMainsScore] = useState("")
    const [hasGivenJEEAdvanced, setHasGivenJEEAdvanced] = useState(false)
    const [JEEAdvancedScore, setJEEAdvancedScore] = useState("")

    return (
      <FieldsContext.Provider
        value={{
          

          motherNameState: [motherName, setMotherName],
          studentNameState: [studentName, setStudentName],

          candidateAdmissionState: [candidateAdmission, setCandidateAdmission],
          permanentAddressState: [permanentAddress, setPermanentAddress],
          guardianNameState: [guardianName, setGuardianName],
          guardianAddressState: [guardianAddress, setGuardianAddress],
          lastInstituteNameFEState: [lastInstituteNameFE, setLastInstituteNameFE],
          lastInstituteAddressFEState: [lastInstituteAddressFE, setLastInstituteAddressFE],
          lastClassFEState: [lastClassFE, setLastClassFE],
          fatherNameState: [fatherName, setFatherName],

          studentGenderState: [studentGender, setStudentGender],

          permanentPinState: [permanentPin, setPermanentPin],
          guardianPinState: [guardianPin, setGuardianPin],
          studentMobileState: [studentMobile, setStudentMobile],
          motherMobileState: [motherMobile, setMotherMobile],
          fatherMobileState: [fatherMobile, setFatherMobile],

          dobState: [dob, setDob],

          placeOfBirthState: [placeOfBirth, setPlaceOfBirth],
          religionState: [religion, setReligion],
          casteNameState: [casteName, setCasteName],
          nationalityState: [nationality, setNationality],
          cityState: [city, setCity],
          districtState: [district, setDistrict],
          guardianCityState: [guardianCity, setGuardianCity],
          guardianDistrictState: [guardianDistrict, setGuardianDistrict],

          phyHandicappedState: [phyHandicapped, setPhyHandicapped],
          maharashtraPassState: [maharashtraPass, setMaharashtraPass],
          hasPANState: [hasPAN, setHasPAN],
          hasGivenMHTCETState: [hasGivenMHTCET, setHasGivenMHTCET] ,
          CETScoreState: [CETScore, setCETScore],
          hasGivenJEEMainsState: [hasGivenJEEMains, setHasGivenJEEMains],
          JEEMainsScoreState: [JEEMainsScore, setJEEMainsScore] ,
          hasGivenJEEAdvancedState: [hasGivenJEEAdvanced, setHasGivenJEEAdvanced] ,
          JEEAdvancedScoreState: [JEEAdvancedScore, setJEEAdvancedScore],

        }}
      >
        {props.children}
      </FieldsContext.Provider>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div>
      <div className="headingBox">
        <h1 style={{textAlign: "center"}}>FE/DSE Registration Form</h1>
      </div>
      <hr />

      <Form onSubmit={handleSubmit}>

        <FieldsProvider>

          <RadioField title="Cadidate Admission" 
            option1="First Year(F.E)" 
            option2="Direct Second Year(D.S.E)" 
            name="candidateAdmission" 
            controlId="candidateAdmission" 
          />

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
          <TextFieldInline
          title="Father's Name"
          placeholder="Enter Full Name"
          controlId="fatherName"
        />

        

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
        
        <Row>
          <Col md>
            <GenderField controlId="studentGender" />
          </Col>
          <Col md>
            <YesNo
            title="Phy. Handicapped"
            name="handicappedRadio"
            controlId="phyHandicapped"
            />
          </Col>
        </Row>

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
        
        </FieldsProvider>


        {/* Detailed Marks */}

        <StudentTerms />

        <StudentUndertaking />

        <ParentUndertaking />
        
        <Button variant="primary" type="submit" >Submit</Button>{' '}
        <br></br>
        <br></br>
      </Form>
    </div>
  )
}

// nice
