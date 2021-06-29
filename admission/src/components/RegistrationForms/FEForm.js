import React from "react"
import { Form, Button } from "react-bootstrap"
import TextField from "./Fields/TextField"
import NumField from "./Fields/NumField"
import GenderField from "./Fields/GenderField"
import DateField from "./Fields/DateField"
import TextFieldInline from "./Fields/TextFieldInline"

export default function FEForm() {
  return (
    <div>
      <h1 className="jumbotron">FE Registration Form</h1>
      <Form>
        <TextField title="Candidate Name" placeholder="Enter Full Name" />
        <TextField title="Mother's Name" placeholder="Enter Full Name" />
        <NumField
          title="Enter CET Merit number"
          maxlength="12"
          controlId="CETmeritno"
          placeholder="CET Merit Number (12 digit)"
        />
        <GenderField />
        <DateField title="DOB" name="dob" />
        <TextFieldInline
          title="Place of Birth"
          placeholder="Enter Place of Birth"
        />
        <NumField
          title="Parents Annual Income(Rs)"
          controlId="parentsAnnualIncome"
          placeholder="Enter in Rs"
          maxlength="15"
        />
      </Form>
    </div>
  )
}
