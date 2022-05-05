import { useState, createContext } from "react"
export const FieldsContext = createContext()

  
// FieldsProvider Function for FieldsContext

export const FieldsProvider = (props) => {
  
  const [motherName, setMotherName] = useState("")
  const [studentName, setStudentName] = useState("")
  const [candidateAdmission, setCandidateAdmission] = useState("")
  
  const [permanentAddress, setPermanentAddress] = useState("")
  const [guardianName, setGuardianName] = useState("")
    const [guardianAddress, setGuardianAddress] = useState("")
    const [lastInstituteNameFE, setLastInstituteNameFE] = useState("")
    const [lastInstituteAddressFE, setLastInstituteAddressFE] = useState("")
    const [lastClass, setLastClass] = useState("")
    const [fatherName, setFatherName] = useState("")
    
    const [studentGender, setStudentGender] = useState("")
    
    const [permanentPin, setPermanentPin] = useState("")
    const [guardianPin, setGuardianPin] = useState("")
    const [studentMobile, setStudentMobile] = useState("")
    const [motherMobile, setMotherMobile] = useState("")
    const [fatherMobile, setFatherMobile] = useState("")
    
    const [dob, setDob] = useState("")
    
    const [placeOfBirth, setPlaceOfBirth] = useState("")
    const [religion, setReligion] = useState("")
    const [casteName, setCasteName] = useState("")
    const [nationality, setNationality] = useState("")
    const [city, setCity] = useState("")
    const [district, setDistrict] = useState("")
    const [guardianCity, setGuardianCity] = useState("")
    const [guardianDistrict, setGuardianDistrict] = useState("")
    
    const [phyHandicapped, setPhyHandicapped] = useState(false)
    const [hasPAN, setHasPAN] = useState(false)
    const [hasGivenMHTCET, setHasGivenMHTCET] = useState(false)
    const [CETScore, setCETScore] = useState("")
    const [hasGivenJEEMains, setHasGivenJEEMains] = useState(false)
    const [JEEMainsScore, setJEEMainsScore] = useState("")
    const [hasGivenJEEAdvanced, setHasGivenJEEAdvanced] = useState(false)
    const [JEEAdvancedScore, setJEEAdvancedScore] = useState("")
    
    const [maharashtraPass, setMaharashtraPass] = useState(false)
    
    const [cetMeritNo, setCetMeritNo] = useState("")
    const [parentsAnnualIncome, setParentsAnnualIncome] = useState("")
    const [aadharNo, setAadharNo] = useState("")
    
    const [permanentEmail, setPermanentEmail] = useState("")
    const [guardianEmail, setGuardianEmail] = useState("")
    
    const [category, setCategory] = useState("Open")
    
    const [yearOfLeaving, setYearOfLeaving] = useState(new Date())
    
    const [transactionId, setTransactionId] = useState("")
    const [senderAcName, setSenderAcName] = useState("")
    const [senderAcNo, setSenderAcNo] = useState("")
    const [transactionDate, setTransactionDate] = useState("")
    const [transactionReceipt, setTransactionReceipt] = useState()
    
    const [senderBankName, setSenderBankName] = useState("")
    const [senderBankIFSC, setSenderBankIFSC] = useState("")
    
    const [PANNo, setPANNo] = useState()
    const [guardianMobile, setGuardianMobile] = useState()
    
    const [prn, setPrn] = useState("")
    const [collegeEmail, setCollegeEmail] = useState("")
    const [department, setDepartment] = useState("Computer Science")
    const [currentClass, setCurrentClass] = useState("FE")

    return (
      <FieldsContext.Provider
      value={{
          prnState: [prn, setPrn],
          collegeEmailState: [collegeEmail, setCollegeEmail],
          departmentState: [department, setDepartment],
          currentClassState: [currentClass, setCurrentClass],

          guardianMobileState: [guardianMobile, setGuardianMobile],

          motherNameState: [motherName, setMotherName],
          studentNameState: [studentName, setStudentName],

          candidateAdmissionState: [candidateAdmission, setCandidateAdmission],
          permanentAddressState: [permanentAddress, setPermanentAddress],
          guardianNameState: [guardianName, setGuardianName],
          guardianAddressState: [guardianAddress, setGuardianAddress],
          lastInstituteNameFEState: [lastInstituteNameFE, setLastInstituteNameFE],
          lastInstituteAddressFEState: [lastInstituteAddressFE, setLastInstituteAddressFE],
          lastClassState: [lastClass, setLastClass],
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
          PANNoState: [PANNo, setPANNo],
          hasGivenMHTCETState: [hasGivenMHTCET, setHasGivenMHTCET] ,
          CETScoreState: [CETScore, setCETScore],
          hasGivenJEEMainsState: [hasGivenJEEMains, setHasGivenJEEMains],
          JEEMainsScoreState: [JEEMainsScore, setJEEMainsScore] ,
          hasGivenJEEAdvancedState: [hasGivenJEEAdvanced, setHasGivenJEEAdvanced] ,
          JEEAdvancedScoreState: [JEEAdvancedScore, setJEEAdvancedScore],

          cetMeritNoState: [cetMeritNo, setCetMeritNo],
          parentsAnnualIncomeState: [parentsAnnualIncome, setParentsAnnualIncome],
          aadharNoState: [aadharNo, setAadharNo],

          permanentEmailState: [permanentEmail, setPermanentEmail],
          guardianEmailState: [guardianEmail, setGuardianEmail],

          categoryState: [category, setCategory],

          yearOfLeavingState: [yearOfLeaving, setYearOfLeaving],
					
          transactionIdState: [transactionId, setTransactionId],
          senderAcNameState: [senderAcName, setSenderAcName],
          senderAcNoState: [senderAcNo, setSenderAcNo],
          transactionDateState: [transactionDate, setTransactionDate],
          transactionReceiptState: [transactionReceipt, setTransactionReceipt],
          senderBankNameState: [senderBankName, setSenderBankName],
          senderBankIFSCState: [senderBankIFSC, setSenderBankIFSC],
        }}
      >
        {props.children}
      </FieldsContext.Provider>
    )
  }