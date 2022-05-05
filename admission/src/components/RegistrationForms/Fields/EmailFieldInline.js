import React from "react"
import { Col, Form, Row } from "react-bootstrap"
import { useState, useContext } from "react"
import { FieldsContext } from "../../States/FieldStates"

export default function EmailFieldInline({ title, controlId }) {
  // const [permanentEmail, setPermanentEmail] = useState("")
  // const [guardianEmail, setGuardianEmail] = useState("")

  const {collegeEmailState} = useContext(FieldsContext)
  const [collegeEmail, setCollegeEmail] = collegeEmailState

  return (
    <div>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          {title}
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="email"
            placeholder="for example, Example@mail.com"
            controlId={controlId}
            onChange={(e) => handleChange(e, controlId)}
          />
        </Col>
      </Form.Group>
    </div>
  )

  function handleChange(e, controlId) {
    switch (controlId) {
      // case "permanentEmail":
      //   setPermanentEmail(e.target.value)
      //   console.log(permanentEmail)
      //   break
      // case "guardianEmail":
      //   setGuardianEmail(e.target.value)
      //   break
      case "collegeEmail":
        setCollegeEmail(e.target.value)
        console.log(collegeEmail)
        break
      default:
        console.log("No Match for Email")
        break
    }
  }
}
