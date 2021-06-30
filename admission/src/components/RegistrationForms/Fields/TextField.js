import React from "react"
import Form from "react-bootstrap/Form"
import { useState } from "react"

export default function TextField({ title, placeholder, controlId }) {
  const [studentName, setStudentName] = useState("")
  const [motherName, setMotherName] = useState("")
  const [cetMeritNo, setCetMeritNo] = useState("")

  return (
    <div>
      <Form.Group controlId={controlId}>
        <Form.Label>{title}</Form.Label>
        <Form.Control
          placeholder={placeholder}
          onChange={(e) => handleChange(e, controlId)}
        />
      </Form.Group>
    </div>
  )

  function handleChange(e, controlId) {
    switch (controlId) {
      case "candidateName":
        setStudentName(e.target.value)
        break
      case "motherName":
        setMotherName(e.target.value)
        break
      default:
        console.log("Does not match any TextField Case")
    }
  }
}
