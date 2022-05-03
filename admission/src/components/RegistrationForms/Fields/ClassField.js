import React from "react"
import { Col, Form } from "react-bootstrap"
import { useState, useContext } from "react"
import { FieldsContext } from "../../States/FieldStates"

export default function ClassField({title}) {
  const {currentClassState} = useContext(FieldsContext)
	const [currentClass, setCurrentClass] = currentClassState

  const handleChange = (e) => {
    setCurrentClass(e.target.value)
		console.log(currentClass)
  }

  return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Label column sm={2}>
            {title}
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="select"
              onChange={(e) => handleChange(e)}
            >
              <option value="FE">FE</option>
              <option value="SE">SE</option>
              <option value="TE">TE</option>
              <option value="BE">BE</option>
              
            </Form.Control>
          </Col>
        </Form.Row>
      </Form.Group>
    </div>
  )
}
