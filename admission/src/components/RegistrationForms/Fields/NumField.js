import React from "react"
import { Col } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import { useState, useContext } from "react"
import { FieldsContext } from "../../States/FieldStates"

export default function NumField({ title, maxlength, controlId, placeholder }) {
  
  const { cetMeritNoState, parentsAnnualIncomeState, aadharNoState, senderAcNoState, guardianMobileState, studentMobileState } = useContext(FieldsContext)

  const [ cetMeritNo, setCetMeritNo ] = cetMeritNoState
  const [ parentsAnnualIncome, setParentsAnnualIncome ] = parentsAnnualIncomeState
  const [ aadharNo, setAadharNo ] = aadharNoState
  const [ senderAcNo, setSenderAcNo ] = senderAcNoState
  const [ guardianMobile, setGuardianMobile] = guardianMobileState
  const [ studentMobile, setStudentMobile ] = studentMobileState
  
  return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Label column sm={2}>
            {title}
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              placeholder={placeholder}
              maxlength={maxlength}
              onChange={(e) => handleChange(e, controlId)}
            />
          </Col>
        </Form.Row>
      </Form.Group>
    </div>
  )

  function handleChange(e, controlId) {
    switch (controlId) {
      case "cetMeritNo":
        setCetMeritNo(e.target.value)
        console.log(cetMeritNo)
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
        console.log(guardianMobile)
        break
      case "studentMobile":
        setStudentMobile(e.target.value)
        console.log(studentMobile)
        break
      default:
        console.log("Does not match any case")
    }
  }
}
