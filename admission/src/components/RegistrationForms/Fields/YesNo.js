import React from "react"
import { Form, Row, Col } from "react-bootstrap"
import { useState, useContext } from "react"
import TextFieldCol from "./TextFieldCol"
import { FieldsContext } from "../FEDSEForm"

export default function YesNo({ title, name, controlId }) {
  // const [phyHandicapped, setPhyHandicapped] = useState(false)
  // const [maharashtraPass, setMaharashtraPass] = useState(false)
  // const [hasPAN, setHasPAN] = useState(false);
  // const [hasGivenMHTCET, setHasGivenMHTCET] = useState(false);
  // const [CETScore, setCETScore] = useState("");
  // const [hasGivenJEEMains, setHasGivenJEEMains] = useState(false);
  // const [JEEMainsScore, setJEEMainsScore] = useState("");
  // const [hasGivenJEEAdvanced, setHasGivenJEEAdvanced] = useState(false);
  // const [JEEAdvancedScore, setJEEAdvancedScore] = useState("");

  const { phyHandicappedState, maharashtraPassState, hasPANState, hasGivenMHTCETState, CETScoreState, hasGivenJEEMainsState, JEEMainsScoreState, hasGivenJEEAdvancedState, JEEAdvancedScoreState } = useContext(FieldsContext)

  const [phyHandicapped, setPhyHandicapped] = phyHandicappedState
  const [maharashtraPass, setMaharashtraPass] = maharashtraPassState
  const [hasPAN, setHasPAN] = hasPANState
  const [hasGivenMHTCET, setHasGivenMHTCET] = hasGivenMHTCETState
  const [CETScore, setCETScore] = CETScoreState
  const [hasGivenJEEMains, setHasGivenJEEMains] = hasGivenJEEMainsState
  const [JEEMainsScore, setJEEMainsScore] = JEEMainsScoreState
  const [hasGivenJEEAdvanced, setHasGivenJEEAdvanced] = hasGivenJEEAdvancedState
  const [JEEAdvancedScore, setJEEAdvancedScore] = JEEAdvancedScoreState

  return (
    <div>
      <Form.Group>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column md={2}>
              {title}
            </Form.Label>
            <Col md={4} onChange={(e) => handleChange(e, controlId)}>
              <Form.Check type="radio" label="Yes" name={name} value={true} />
              <Form.Check type="radio" label="No" name={name} value={false} />
            </Col>
            <Col md={6}>
              {hasPAN === "true" && <TextFieldCol title="PAN no." placeholder="Enter PAN no." controlId="PANNo" />}
              {hasGivenMHTCET === "true" && <TextFieldCol title="MHTCET Score" placeholder="Enter MHTCET Score" controlId="CETScore" />}
              {hasGivenJEEMains === "true" && <TextFieldCol title="JEE Mains Score" placeholder="Enter JEE Mains Score" controlId="JEEMainsScore" />}
              {hasGivenJEEAdvanced === "true" && <TextFieldCol title="JEE Advanced Score" placeholder="Enter JEE Advanced Score" controlId="JEEAdvancedScore" />}
            </Col>
          </Form.Group>

          {/* JEE Advanced Field */}
          {hasGivenJEEMains === "true" && 
          <YesNo 
            title="Do you have JEE Advanced Score?"
            name="jeeAdvanced"
            controlId="jeeAdvanced"
          />}

        </fieldset>
      </Form.Group>
    </div>
  )

  function handleChange(e, controlId) {
    switch (controlId) {
      case "hasPAN":
        setHasPAN(e.target.value)
        break
      case "phyHandicapped":
        setPhyHandicapped(e.target.value)
        break
      case "maharashtraPass":
        setMaharashtraPass(e.target.value)
        break
      case "mhtcet":
        setHasGivenMHTCET(e.target.value);
        break;
      case "jeeMains":
        setHasGivenJEEMains(e.target.value);
        break;
      case "jeeAdvanced":
        setHasGivenJEEAdvanced(e.target.value);
        break;
      default:
        console.log("Does not match any Radios")
    }
  }
}
