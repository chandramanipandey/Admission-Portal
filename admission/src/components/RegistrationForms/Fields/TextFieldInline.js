import React from "react"
import { Col, Form } from "react-bootstrap"
import { useState } from "react"

export default function TextFieldInline({ title, placeholder, controlId }) {
  // const [placeOfBirth, setPlaceOfBirth] = useState("")
  // const [religion, setReligion] = useState("")
  // const [casteName, setCasteName] = useState("")
  // const [nationality, setNationality] = useState("")
  const [permanentAddress, setPermanentAddress] = useState("") //Used in TextField
  // const [city, setCity] = useState("")
  // const [district, setDistrict] = useState("")
  const [guardianName, setGuardianName] = useState("")
  const [guardianAddress, setGuardianAddress] = useState("")
  // const [guardianCity, setGuardianCity] = useState("")
  // const [guardianDistrict, setGuardianDistrict] = useState("")
  const [lastInstituteNameFE, setLastInstituteNameFE] = useState("")
  const [lastInstituteAddressFE, setLastInstituteAddressFE] = useState("")
  const [lastClassFE, setLastClassFE] = useState("")

  return (
    <div>
      <Form.Group controlId={controlId}>
        <Form.Row>
          <Form.Label column sm={2}>
            {title}
          </Form.Label>
          <Col sm={10}>
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
      // case "placeOfBirth":
      //   setPlaceOfBirth(e.target.value)
      //   break
      // case "religion":
      //   setReligion(e.target.value)
      //   break
      // case "casteName":
      //   setCasteName(e.target.value)
      //   break
      // case "Nationality":
      //   setNationality(e.target.value)
      //   break
      case "permanentAddress":
        setPermanentAddress(e.target.value)
        break
      // case "city":
      //   setCity(e.target.value)
      //   console.log(city)
      //   break
      // case "district":
      //   setDistrict(e.target.value)
      //   break
      case "guardianName":
        setGuardianName(e.target.value)
        break
      case "guardianAddress":
        setGuardianAddress(e.target.value)
        break
      // case "guardianCity":
      //   setGuardianCity(e.target.value)
      //   break
      // case "guardianDistrict":
      //   setGuardianDistrict(e.target.value)
      //   break
      case "lastInstituteNameFE":
        setLastInstituteNameFE(e.target.value)
        break
      case "lastInstituteAddressFE":
        setLastInstituteAddressFE(e.target.value)
        break
      case "lastClassFE":
        setLastClassFE(e.target.value)
        break
      default:
        console.log("No Match for TextFieldInline")
    }
  }
}
