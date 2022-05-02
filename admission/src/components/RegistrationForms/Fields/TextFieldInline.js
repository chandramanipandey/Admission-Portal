import React from "react"
import { Col, Form } from "react-bootstrap"
import { useState, useContext } from "react"
import { FieldsContext } from "../../States/FieldStates"

export default function TextFieldInline({ title, placeholder, controlId }) {

  const {permanentAddressState,guardianNameState,guardianAddressState, lastInstituteNameFEState, lastInstituteAddressFEState, lastClassState, fatherNameState } = useContext(FieldsContext)
  
  const [permanentAddress, setPermanentAddress] = permanentAddressState
  const [guardianAddress, setGuardianAddress] = guardianAddressState
  const [guardianName, setGuardianName] = guardianNameState
  const [lastInstituteNameFE, setLastInstituteNameFE] = lastInstituteNameFEState
  const [lastInstituteAddressFE, setLastInstituteAddressFE] = lastInstituteAddressFEState
  const [lastClass, setLastClass] = lastClassState
  const [fatherName, setFatherName] = fatherNameState

  return (
    <div>
      <Form.Group controlId={controlId}>
        <Form.Row>
          <Form.Label column sm={2}>
            {title}
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              placeholder={placeholder}
              onChange={(e) => handleChange(e, controlId)}
            />
          </Col>
        </Form.Row>
      </Form.Group>
    </div>
  )

  function handleChange(e, controlId) {
    switch (controlId) {
      case "fatherName":
        setFatherName(e.target.value)
        break
      case "permanentAddress":
        setPermanentAddress(e.target.value)
        break
      case "guardianName":
        setGuardianName(e.target.value)
        break
      case "guardianAddress":
        setGuardianAddress(e.target.value)
        break
      case "lastInstituteNameFE":
        setLastInstituteNameFE(e.target.value)
        break
      case "lastInstituteAddressFE":
        setLastInstituteAddressFE(e.target.value)
        break
      case "lastClass":
        setLastClass(e.target.value)
        break
      default:
        console.log("No Match for TextFieldInline")
    }
  }
}
