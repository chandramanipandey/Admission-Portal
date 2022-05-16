import React from "react"
import { Col } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import { useState, useContext } from "react"
import { FieldsContext } from "../../States/FieldStates"

export default function NumField({ title, maxlength, controlId, placeholder, isDisabled, size, value }) {
  
  const { 
    cetMeritNoState, 
    parentsAnnualIncomeState, 
    aadharNoState, 
    senderAcNoState, 
    guardianMobileState, 
    studentMobileState,
    openState,
    omsState,
    obc_ebcState,
    scState,
    st_ntState,
  } = useContext(FieldsContext)



  const [ cetMeritNo, setCetMeritNo ] = cetMeritNoState
  const [ parentsAnnualIncome, setParentsAnnualIncome ] = parentsAnnualIncomeState
  const [ aadharNo, setAadharNo ] = aadharNoState
  const [ senderAcNo, setSenderAcNo ] = senderAcNoState
  const [ guardianMobile, setGuardianMobile] = guardianMobileState
  const [ studentMobile, setStudentMobile ] = studentMobileState

  //Student categories
  const [ open, setOpen ] = openState
  const [ oms, setOms ] = omsState
  const [ obc_ebc, setObc_ebc ] = obc_ebcState
  const [ sc, setSc ] = scState
  const [ st_nt, setSt_nt ] = st_ntState

  const [ inputsValues, setInputsValues ] = useState({
    open:null,
    oms:null,
    obc_ebc:null,
    sc:null,
    st_nt:null,
  });

  
  return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Label column sm={3}>
            {title}
          </Form.Label>
          <Col sm={size? size : 9}> 
            {isDisabled ? (
              <Form.Control
              type="number"
              placeholder={placeholder}
              maxLength={2}
              onChange={(e) => handleChange(e, controlId)}
              disabled
            />
            ) : (
              <Form.Control
              type="number"
              placeholder={placeholder}
              maxLength={maxlength}
              onChange={(e) => handleChange(e, controlId)}
              defaultValue = {value}
            />
            )}
          </Col>
        </Form.Row>
      </Form.Group>
    </div>
  )

  function handleChange(e, controlId) {
    const name = e.target.name;
    const value = e.target.value;
    inputsValues[e.target.name] = e.target.value;
    setInputsValues({...inputsValues, [name] : value });
    console.log(inputsValues);

    switch (controlId) {
      case "cetMeritNo":
        setCetMeritNo(e.target.value)
        break
      case "parentsAnnualIncome":
        setParentsAnnualIncome(e.target.value)
        break
      case "aadharNo":
        setAadharNo(e.target.value)
        break
      case "senderAcNo":
        setSenderAcNo(e.target.value) 
        break
      case "guardianMobile":
        setGuardianMobile(e.target.value)
        break
      case "studentMobile":
        setStudentMobile(e.target.value)
        break
      case "open":
        setOpen(e.target.value)
        break
      case "oms":
        setOms(e.target.value)
        break
      case "obc_ebc":
        setObc_ebc(e.target.value)
        break
      case "sc":
        setSc(e.target.value)
        break
      case "st_nt":
        setSt_nt(e.target.value)
        break
      default:
        console.log("Does not match any case")
    }
  }
}
