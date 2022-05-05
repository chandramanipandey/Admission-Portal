import React from "react"
import { Col, Form } from "react-bootstrap"
import { useState, useContext } from "react"
import { FieldsContext } from "../../States/FieldStates"

export default function Department() {
	const {departmentState} = useContext(FieldsContext)
	const [department, setDepartment] = departmentState

	function handleChange(e) {
		setDepartment(e.target.value)
		console.log(department)
	}

  return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Label column sm={2}>
            Department
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="select"
              onChange={(e) => handleChange(e)}
            >
              <option value="Computer Science">Computer Science</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
              <option value="ENTC">ENTC</option>
            </Form.Control>
          </Col>
        </Form.Row>
      </Form.Group>
    </div>
  )
}
