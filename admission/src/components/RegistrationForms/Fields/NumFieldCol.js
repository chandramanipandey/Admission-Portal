import React from "react"
import { Col } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import { useState, useContext } from "react"
import { FieldsContext } from "../../States/FieldStates"

export default function NumField({ title, maxlength, controlId, placeholder }) {

  const { permanentPinState, guardianPinState, studentMobileState, motherMobileState, fatherMobileState} = useContext(FieldsContext)

  const [permanentPin, setPermanentPin] = permanentPinState
  const [guardianPin, setGuardianPin] = guardianPinState
  const [studentMobile, setStudentMobile] = studentMobileState
  const [motherMobile, setMotherMobile] = motherMobileState
  const [fatherMobile, setFatherMobile] = fatherMobileState

  return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Label column sm={4}>
            {title}
          </Form.Label>
          <Col sm={8}>
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
      case "motherMobile":
        setMotherMobile(e.target.value)
        break
      case "fatherMobile":
        setFatherMobile(e.target.value)
        break
      case "permanentPin":
        setPermanentPin(e.target.value)
        break
      case "guardianPin":
        setGuardianPin(e.target.value)
        break
      case "studentMobile":
        setStudentMobile(e.target.value)
        break
      default:
        console.log("Does not match any case")
    }
  }
}
