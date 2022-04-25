import React from "react"
import { Col } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import { useState, useContext } from "react"
import { FieldsContext } from "../FEDSEForm"

export default function NumField({ title, maxlength, controlId, placeholder }) {
  
  const { cetMeritNoState, parentsAnnualIncomeState, aadharNoState } = useContext(FieldsContext)

  const [ cetMeritNo, setCetMeritNo ] = cetMeritNoState
  const [ parentsAnnualIncome, setParentsAnnualIncome ] = parentsAnnualIncomeState
  const [ aadharNo, setAadharNo ] = aadharNoState
  
  return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Label column sm={2}>
            {title}
          </Form.Label>
          <Col sm={10}>
            <Form.Control
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
      case "cetmeritNo":
        setCetMeritNo(e.target.value)
        break
      case "parentsAnnualIncome":
        setParentsAnnualIncome(e.target.value)
        break
      case "aadharNo":
        setAadharNo(e.target.value)
        break
      
      default:
        console.log("Does not match any case")
    }
  }
}
