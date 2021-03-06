import React from 'react'
import { Button, Card, Form, Nav, Row, Col } from "react-bootstrap"
import NavigationBar from '../Dashboard/NavigationBar'
import RadioField from '../RegistrationForms/Fields/RadioField'
import TextField from '../RegistrationForms/Fields/TextField'
import TextFieldInline from '../RegistrationForms/Fields/TextFieldInline'
import { receivefromfirebase } from '../Firebase/receivefromfirebase'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import "../CSS/Footer.css"
import Footer from '../Dashboard/Footer'
import { onAuthStateChanged } from 'firebase/auth'


export default function MyProfile() {
  const history = useHistory();
  const auth = getAuth();
  const [userauth, setuserauth] = useState(undefined);

  const [loading, setLoading] = useState(false)
  const [studentData, setStudentData] = useState({ name: "Johnny" })

  async function fetchStudentData() {
    let response = await receivefromfirebase(auth.currentUser.uid, "Admission_Data");
    setStudentData(response)
    setLoading(false)
  }

  useEffect(() => {
    try {

      auth.onAuthStateChanged((authobj) => {
        if (authobj) {
          setuserauth(authobj.uid)
        }
        else {
          history.push('/', "You are not authorised to visit this website or you have recently logged out successfully, if you are an authorised user please login to continue");
        }
      }
      );
      fetchStudentData();
    }
    catch (e) {
      console.log(e);
    }
  }, [])



  return loading ? "Loading Page" : (
    <div>
      <NavigationBar />
      <div className="row align-items-md-stretch w-100">
        <div className="col-md">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h1>My Profile</h1>
            {/* <p>Enter your Fees Details.</p> */}
          </div>
        </div>
      </div>

      <hr />

      <Card>
        {/* <Card.Header className='text-center' as="h2" >My Profile</Card.Header> */}
        <Card.Body>
          <Form>

            <RadioField title="Cadidate Admission"
              option1="First Year(F.E)"
              option2="Direct Second Year(D.S.E)"
              name="candidateAdmission"
              controlId="candidateAdmission"
            />

            <TextField
              title="Candidate Name"
              placeholder="Enter Full Name"
              controlId="candidateName"
            />
            <TextField
              title="Mother's Name"
              placeholder="Enter Full Name"
              controlId="motherName"
            />
            <TextFieldInline
              title="Father's Name"
              placeholder="Enter Full Name"
              controlId="fatherName"
            />

          </Form>

        </Card.Body>

      </Card>

    </div>

  )


}

