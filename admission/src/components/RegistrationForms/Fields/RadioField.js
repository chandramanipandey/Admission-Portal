import React, { useContext } from 'react'
import { useState } from 'react'
import { Col, Form } from 'react-bootstrap'
import { FieldsContext } from "../../States/FieldStates"

export default function RadioField({title, option1, option2, name, controlId}) {
  // const [candidateAdmission, setCandidateAdmission] = useState("")

  const { candidateAdmissionState } = useContext(FieldsContext)
  const [ candidateAdmission, setCandidateAdmission ] = candidateAdmissionState

  // const [isChecked, setIsChecked] = useState(false)

  return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Label column md={2}>
            {title}
          </Form.Label>
          <Col md={10} onChange={(e) => handleChange(e, controlId)} >
            <Form.Check type="radio" label={option1} disabled name={name} value="feAdmission" />
            <Form.Check type="radio" label={option2} disabled checked={true} name={name} value="dseAdmission" />
          </Col>
        </Form.Row>

      </Form.Group>
    </div>
  )

  function handleChange(e, controlId) {
    switch(controlId) {
      case "candidateAdmission":
        setCandidateAdmission(e.target.value)
        break;
    }
  }
}
