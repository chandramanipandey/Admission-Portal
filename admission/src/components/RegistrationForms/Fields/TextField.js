import React from "react"
import Form from "react-bootstrap/Form"
import { useState, useContext } from "react"
import { FieldsContext } from "../../States/FieldStates"
import { Col } from "react-bootstrap"

export default function TextField({ title, placeholder, controlId }) {

  const { motherNameState, studentNameState, transactionIdState, senderAcNameState, senderBankNameState, senderBankIFSCState } = useContext(FieldsContext)
  
  const [motherName, setMotherName] = motherNameState
  const [studentName, setStudentName] = studentNameState
  const [transactionId, setTransactionId] = transactionIdState
  const [senderAcName, setSenderAcName] = senderAcNameState
  const [senderBankName, setSenderBankName] = senderBankNameState
  const [senderBankIFSC, setSenderBankIFSC] = senderBankIFSCState
  
  return (
    <div>
      <Form.Group controlId={controlId}>
        <Form.Row>
          <Col md={2}>
            <Form.Label>{title}</Form.Label>
          </Col>
          <Col md={10}>
            <Form.Control
              placeholder={placeholder}
              onChange={(e) => handleChange(e, controlId)}
            />
          </Col>
        </Form.Row>
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
      case "transactionId":
        setTransactionId(e.target.value)
        break
      case "senderAcName":
        setSenderAcName(e.target.value)
        break
      case "senderBankName":
        setSenderBankName(e.target.value)
        break
      case "senderBankIFSC":
        setSenderBankIFSC(e.target.value)
        break
      default:
        console.log("Does not match any TextField Case")
    }
  }
}
