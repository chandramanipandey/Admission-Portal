import React from "react"
import Form from "react-bootstrap/Form"

export default function TextField({ title, placeholder, controlId }) {
  return (
    <div>
      <Form.Group controlId={controlId}>
        <Form.Label>{title}</Form.Label>
        <Form.Control placeholder={placeholder} />
      </Form.Group>
    </div>
  )
}
