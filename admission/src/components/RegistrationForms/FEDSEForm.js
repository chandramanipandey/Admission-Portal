import React from "react";
import { useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import TextField from "./Fields/TextField";
import NumField from "./Fields/NumField";
import NumFieldCol from "./Fields/NumFieldCol";
import GenderField from "./Fields/GenderField";
import DateField from "./Fields/DateField";
import TextFieldInline from "./Fields/TextFieldInline";
import TextFieldCol from "./Fields/TextFieldCol";
import YesNo from "./Fields/YesNo";
import YesNoCol from "./Fields/YesNoCol";
import Category from "./Fields/Category";
import EmailFieldInline from "./Fields/EmailFieldInline";
import EmailFieldCol from "./Fields/EmailFieldCol";
import YearField from "./Fields/YearField";
import StudentTerms from "./StudentTerms";
import RadioField from "./Fields/RadioField";
import StudentUndertaking from "./StudentUndertaking";
import ParentUndertaking from "./ParentUndertaking";

import FileInput from "./Fields/FileInput";

import { createContext, useState, useContext } from "react";
import { FieldsProvider, FieldsContext } from "../States/FieldStates";
import "../CSS/Forms.css";
import { adduserdata } from "../Firebase/addtofirebase";
import { getAuth } from "firebase/auth";
import NavigationBar from "../Dashboard/NavigationBar";
import Department from "./Fields/DepartmentField";
import ClassField from "./Fields/ClassField";
import { useHistory } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addroletofirebase } from "../Firebase/addroletofirebase";
import { checknewuser } from "../Firebase/checknewstudent";
import { Alert } from "react-bootstrap";
import { addadmissiondocumentstofirebase } from "../Firebase/addDocumentstofirebase";

export default function FEDSEForm() {
  const auth = getAuth();
  const history = useHistory();
  const [userauth, setuserauth] = useState(undefined);

  const {
    motherNameState,
    studentNameState,
    candidateAdmissionState,
    permanentAddressState,
    guardianNameState,
    guardianAddressState,
    lastInstituteNameFEState,
    lastInstituteAddressFEState,
    lastClassState,
    fatherNameState,
    studentGenderState,
    permanentPinState,
    guardianPinState,
    studentMobileState,
    motherMobileState,
    fatherMobileState,
    dobState,
    placeOfBirthState,
    religionState,
    casteNameState,
    nationalityState,
    cityState,
    districtState,
    guardianCityState,
    guardianDistrictState,
    phyHandicappedState,
    hasPANState,
    hasGivenMHTCETState,
    CETScoreState,
    hasGivenJEEMainsState,
    JEEMainsScoreState,
    hasGivenJEEAdvancedState,
    JEEAdvancedScoreState,
    maharashtraPassState,
    cetMeritNoState,
    parentsAnnualIncomeState,
    aadharNoState,
    permanentEmailState,
    guardianEmailState,
    categoryState,
    yearOfLeavingState,
    prnState,
    collegeEmailState,
    departmentState,
    currentClassState,
    SSCMarksheetState,
    HSCMarksheetState,
    CETMarksheetState,
    JEEMainsMarksheetState,
    JEEAdvMarksheetState,
  } = useContext(FieldsContext);

  const [prn, setPrn] = prnState;
  const [collegeEmail, setCollegeEmail] = collegeEmailState;
  const [department, setDepartment] = departmentState;
  const [currentClass, setCurrentClass] = currentClassState;

  const [placeOfBirth, setPlaceOfBirth] = placeOfBirthState;
  const [religion, setReligion] = religionState;
  const [casteName, setCasteName] = casteNameState;
  const [nationality, setNationality] = nationalityState;
  const [city, setCity] = cityState;
  const [district, setDistrict] = districtState;
  const [guardianCity, setGuardianCity] = guardianCityState;
  const [guardianDistrict, setGuardianDistrict] = guardianDistrictState;

  const [category, setCategory] = categoryState;

  const [dob, setDob] = dobState;

  const [permanentEmail, setPermanentEmail] = permanentEmailState;
  const [guardianEmail, setGuardianEmail] = guardianEmailState;

  const [studentGender, setStudentGender] = studentGenderState;

  const [cetMeritNo, setCetMeritNo] = cetMeritNoState;
  const [parentsAnnualIncome, setParentsAnnualIncome] =
    parentsAnnualIncomeState;
  const [aadharNo, setAadharNo] = aadharNoState;

  const [permanentPin, setPermanentPin] = permanentPinState;
  const [guardianPin, setGuardianPin] = guardianPinState;
  const [studentMobile, setStudentMobile] = studentMobileState;
  const [motherMobile, setMotherMobile] = motherMobileState;
  const [fatherMobile, setFatherMobile] = fatherMobileState;

  const [candidateAdmission, setCandidateAdmission] = candidateAdmissionState;

  const [motherName, setMotherName] = motherNameState;
  const [studentName, setStudentName] = studentNameState;

  const [permanentAddress, setPermanentAddress] = permanentAddressState;
  const [guardianAddress, setGuardianAddress] = guardianAddressState;
  const [guardianName, setGuardianName] = guardianNameState;
  const [lastInstituteNameFE, setLastInstituteNameFE] =
    lastInstituteNameFEState;
  const [lastInstituteAddressFE, setLastInstituteAddressFE] =
    lastInstituteAddressFEState;
  const [lastClass, setLastClass] = lastClassState;
  const [fatherName, setFatherName] = fatherNameState;

  const [yearOfLeaving, setYearOfLeaving] = yearOfLeavingState;

  const [phyHandicapped, setPhyHandicapped] = phyHandicappedState;
  const [maharashtraPass, setMaharashtraPass] = maharashtraPassState;
  const [hasPAN, setHasPAN] = hasPANState;
  const [hasGivenMHTCET, setHasGivenMHTCET] = hasGivenMHTCETState;
  const [CETScore, setCETScore] = CETScoreState;
  const [hasGivenJEEMains, setHasGivenJEEMains] = hasGivenJEEMainsState;
  const [JEEMainsScore, setJEEMainsScore] = JEEMainsScoreState;
  const [hasGivenJEEAdvanced, setHasGivenJEEAdvanced] =
    hasGivenJEEAdvancedState;
  const [JEEAdvancedScore, setJEEAdvancedScore] = JEEAdvancedScoreState;

  const [SSCMarksheet, setSSCMarksheet] = SSCMarksheetState;
  const [HSCMarksheet, setHSCMarksheet] = HSCMarksheetState;
  const [CETMarksheet, setCETMarksheet] = CETMarksheetState;
  const [JEEMainsMarksheet, setJEEMainsMarksheet] = JEEMainsMarksheetState;
  const [JEEAdvMarksheet, setJEEAdvMarksheet] = JEEAdvMarksheetState;
  const [newuser, setnewUser] = useState();

  // console.log(SSCMarksheet);

  const FeDseFormData = {
    placeOfBirth: placeOfBirth,
    religion: religion,
    nationality: nationality,
    district: district,
    guardianCity: guardianCity,
    guardianDistrict: guardianDistrict,
    category: category,
    dob: dob,
    permanentEmail: permanentEmail,
    guardianEmail: guardianEmail,
    studentGender: studentGender,
    cetMeritNo: cetMeritNo,
    parentsAnnualIncome: parentsAnnualIncome,
    aadharNo: aadharNo,
    permanentPin: permanentPin,
    guardianPin: guardianPin,
    studentMobile: studentMobile,
    motherMobile: motherMobile,
    fatherMobile: fatherMobile,
    candidateAdmission: candidateAdmission,
    motherName: motherName,
    studentName: studentName,
    permanentAddress: permanentAddress,
    guardianAddress: guardianAddress,
    guardianName: guardianName,
    lastInstituteNameFE: lastInstituteNameFE,
    lastInstituteAddressFE: lastInstituteAddressFE,
    lastClass: lastClass,
    fatherName: fatherName,
    yearOfLeaving: yearOfLeaving,
    phyHandicapped: phyHandicapped,
    maharashtraPass: maharashtraPass,
    hasPAN: hasPAN,
    hasGivenMHTCET: hasGivenMHTCET,
    CETScore: CETScore,
    hasGivenJEEMains: hasGivenJEEMains,
    JEEMainsScore: JEEMainsScore,
    hasGivenJEEAdvanced: hasGivenJEEAdvanced,
    JEEAdvancedScore: JEEAdvancedScore,
    prn: prn,
    collegeEmail: collegeEmail,
    department: department,
    currentClass: currentClass,
  };

  const GenStudentData = {
    userName: studentName,
    userMobile: studentMobile,
    prn: prn,
    collegeEmail: collegeEmail,
    dob: dob,
    department: department,
    currentClass: currentClass,
    Role: "Student",
  };
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
      });
      setnewuserfunction();
    } catch (e) {
      console.log(e);
    }
  }, []);
  async function setnewuserfunction() {
    try {
      const newusercheck = await checknewuser(auth.currentUser.uid);
      console.log(newusercheck);
      setnewUser(newusercheck);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const sscdownloadlink = "Not_Uploaded";
    const hscdownloadlink = "Not_Uploaded";
    const cetdownloadlink = "Not_Uploaded";
    const jeemaindownloadlink = "Not_Uploaded";
    const jeeadvanceddownloadlink = "Not_Uploaded";
    if (SSCMarksheet != null) {
      const sscdownloadlink = await addadmissiondocumentstofirebase(
        auth.currentUser.uid,
        SSCMarksheet,
        "SSC.jpg"
      );
    }

    if (HSCMarksheet != null) {
      const hscdownloadlink = await addadmissiondocumentstofirebase(
        auth.currentUser.uid,
        HSCMarksheet,
        "HSC.jpg"
      );
    }
    if (CETMarksheet != null) {
      const cetdownloadlink = await addadmissiondocumentstofirebase(
        auth.currentUser.uid,
        CETMarksheet,
        "CET.jpg"
      );
    }
    if (JEEMainsMarksheet != null) {
      const jeemaindownloadlink = await addadmissiondocumentstofirebase(
        auth.currentUser.uid,
        JEEMainsMarksheet,
        "JEEMAIN.jpg"
      );
    }
    if (JEEAdvMarksheet != null) {
      const jeeadvanceddownloadlink = await addadmissiondocumentstofirebase(
        auth.currentUser.uid,
        JEEAdvMarksheetState,
        "JEEADVANCED.jpg"
      );
    }
    FeDseFormData["sscmarksheet"] = sscdownloadlink;
    FeDseFormData["hscmarksheet"] = hscdownloadlink;
    FeDseFormData["cetmarksheet"] = cetdownloadlink;
    FeDseFormData["jeemainmarksheet"] = jeemaindownloadlink;
    FeDseFormData["jeeadvancedmarksheet"] = jeeadvanceddownloadlink;

    adduserdata(FeDseFormData, auth.currentUser.uid, "Admission_Data");
    adduserdata(GenStudentData, auth.currentUser.uid, "User_Info");
    addroletofirebase(
      auth.currentUser.uid,
      auth.currentUser.email,
      "Student",
      GenStudentData["department"]
    );
  }

  return (
    <div>
      <NavigationBar />
      <div className="row align-items-md-stretch w-100 mt-3">
        <div className="col-md">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h1>FE / DSE Registration Form</h1>
            <p>Register Yourself</p>
          </div>
        </div>
      </div>

      <hr />
      {newuser == true ? (
        <Form onSubmit={handleSubmit}>
          {/* <FieldsProvider> */}
          <RadioField
            title="Cadidate Admission"
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
          <Col md>
            <GenderField controlId="studentGender" />
          </Col>
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
          <Col md>
            <YesNo
              title="Do you have JEE Advanced Score?"
              name="jeeAdvanced"
              controlId="jeeAdvanced"
            />
          </Col>
          <NumField
            title="Enter CET Merit number"
            maxlength="12"
            controlId="cetMeritNo"
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
                placeholder="Enter 6 digit Pin Code"
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
            title="Guardian's Address"
            placeholder="Enter Address here"
            controlId="guardianAddress"
          />
          <Row>
            <Col md>
              <TextFieldCol
                title="Guardian's City"
                placeholder="Enter city for Guardian, for example, Pimpri-Chinchwad"
                controlId="guardianCity"
              />
            </Col>
            <Col md>
              <NumFieldCol
                title="Guardian's Pin Code"
                placeholder="Enter Guardian Address PinCode"
                controlId="guardianPin"
              />
            </Col>
          </Row>
          <Row>
            <Col md>
              <TextFieldCol
                title="Guardian's District"
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
            controlId="lastClass"
          />
          <YearField title="Year of Leaving" controlId="yearofLeavingFE" />
          {/* 4 Fields */}
          <TextField
            title="Permanent Registration Number (PRN)"
            placeholder="Enter PRN"
            maxlength="9"
            controlId="prn"
          />
          <EmailFieldInline title="College Email" controlId="collegeEmail" />
          <Department />
          <ClassField title="Current Class" />
          {/* </FieldsProvider> */}
          {/* Detailed Marks */}
          {/* SSC HSC CETMarksheet JEEMarksheet */}
          <FileInput title="SSC Marksheet" controlId="SSCMarksheetFile" />
          <FileInput title="HSC Marksheet" controlId="HSCMarksheetFile" />
          <FileInput title="CET Marksheet" controlId="CETMarksheetFile" />
          {hasGivenJEEMains == "true" && (
            <FileInput
              title="JEE Mains Marksheet"
              controlId="JEEMainsMarksheetFile"
            />
          )}
          {hasGivenJEEAdvanced == "true" && (
            <FileInput
              title="JEE Advanced Marksheet"
              controlId="JEEAdvMarksheetFile"
            />
          )}
          <StudentTerms />
          <StudentUndertaking />
          <ParentUndertaking />
          <Button variant="primary" type="submit">
            Submit
          </Button>{" "}
          <br></br>
          <br></br>
        </Form>
      ) : (
        <Alert variant="success" style={{ width: "100%" }}>
          You are already registered on this platform if you want to edit your
          form, Please contact Admin
        </Alert>
      )}
    </div>
  );
}
