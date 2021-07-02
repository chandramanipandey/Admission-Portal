import React from "react"
import Form from "react-bootstrap/Form"
import { useState, useContext } from "react"
import { FieldsContext } from "../FEForm"

export default function TextField({ title, placeholder, controlId }) {
  // const [motherName, setMotherName] = useState("")
  // const [studentName, setStudentName] = useState("")
  const { motherName, studentName } = useContext(FieldsContext)
  const [motherNameState, setMotherName] = motherName
  const [studentNameState, setStudentName] = studentName

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
