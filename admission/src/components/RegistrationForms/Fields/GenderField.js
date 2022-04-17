import React from "react"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState } from "react"

export default function GenderField({ controlId }) {
  const [studentGender, setStudentGender] = useState("")

  return (
    <div>
      <Form.Group>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={4}>
              Gender
            </Form.Label>
            <Col sm={8}>
              <Form.Check
                type="radio"
                label="Male"
                name="genderRadio"
                value="Male"
                onChange={(e) => handleChange(e, controlId)}
              />
              <Form.Check
                type="radio"
                label="Female"
                name="genderRadio"
                value="Female"
                onChange={(e) => handleChange(e, controlId)}
              />
            </Col>
          </Form.Group>
        </fieldset>
      </Form.Group>
    </div>
  )

  function handleChange(e, controlId) {
    switch (controlId) {
      case "studentGender":
        setStudentGender(e.target.value)
        console.log(studentGender)
        break
      default:
        console.log("No Match in Gender")
    }
  }
}
