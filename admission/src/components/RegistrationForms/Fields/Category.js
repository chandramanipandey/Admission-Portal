import React from "react"
import { Col, Form } from "react-bootstrap"
import { useState, useContext } from "react"
import { FieldsContext } from "../../States/FieldStates"

export default function Category() {
  // const [category, setCategory] = useState("Open")

  const { categoryState } = useContext(FieldsContext)

  const [ category, setCategory ] = categoryState

  const handleChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Label column sm={2}>
            Category
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="select"
              onChange={(e) => handleChange(e)}
            >
              <option value="Open">Open</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="NT">NT</option>
              <option value="NT1">NT1</option>
              <option value="NT2">NT2</option>
              <option value="VJ">VJ</option>
              <option value="DT">DT</option>
              <option value="OBC">OBC</option>
              <option value="SBC">SBC</option>
              <option value="EWS">EWS</option>
              <option value="TFWS">TFWS</option>
            </Form.Control>
          </Col>
        </Form.Row>
      </Form.Group>
    </div>
  )
}
