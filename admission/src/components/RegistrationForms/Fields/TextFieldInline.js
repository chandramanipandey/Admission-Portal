import React from "react"
import { Col, Form } from "react-bootstrap"
import { useState, useContext } from "react"
import { FieldsContext } from "../FEDSEForm"

export default function TextFieldInline({ title, placeholder, controlId }) {
  // const [permanentAddress, setPermanentAddress] = useState("")
  // const [guardianName, setGuardianName] = useState("")
  // const [guardianAddress, setGuardianAddress] = useState("")
  // const [lastInstituteNameFE, setLastInstituteNameFE] = useState("")
  // const [lastInstituteAddressFE, setLastInstituteAddressFE] = useState("")
  // const [lastClassFE, setLastClassFE] = useState("")
  // const [fatherName, setFatherName] = useState("")

  const {permanentAddressState,guardianNameState,guardianAddressState, lastInstituteNameFEState, lastInstituteAddressFEState, lastClassFEState, fatherNameState } = useContext(FieldsContext)
  
  const [permanentAddress, setPermanentAddress] = permanentAddressState
  const [guardianAddress, setGuardianAddress] = guardianAddressState
  const [guardianName, setGuardianName] = guardianNameState
  const [lastInstituteNameFE, setLastInstituteNameFE] = lastInstituteNameFEState
  const [lastInstituteAddressFE, setLastInstituteAddressFE] = lastInstituteAddressFEState
  const [lastClassFE, setLastClassFE] = lastClassFEState
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
        console.log({fatherName})
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
      case "lastClassFE":
        setLastClassFE(e.target.value)
        break
      default:
        console.log("No Match for TextFieldInline")
    }
  }
}
