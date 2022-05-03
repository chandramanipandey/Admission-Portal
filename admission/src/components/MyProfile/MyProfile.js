import React from 'react'
import {Button, Card, Form, Nav, Row, Col} from "react-bootstrap"
import NavigationBar from '../Dashboard/NavigationBar'
import RadioField from '../RegistrationForms/Fields/RadioField'
import TextField from '../RegistrationForms/Fields/TextField'
import TextFieldInline from '../RegistrationForms/Fields/TextFieldInline'
import { receivefromfirebase } from '../Firebase/receivefromfirebase'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'


export default function MyProfile() {
  const history = useHistory();
  const auth = getAuth();

  const [loading, setLoading] = useState(false)
  const [studentData, setStudentData] = useState({name: "Johnny"})

  async function fetchStudentData() {
    let response = await receivefromfirebase(auth.currentUser.uid);
    setStudentData(response)
    setLoading(false)
  }

  useEffect(() => {
    fetchStudentData()
    console.log("useEffect Running")
  }, [])

    return loading ? "Loading Page" : (
      <div>
      <NavigationBar />
		  <Card>
			<Card.Header className='text-center' as="h2" >My Profile</Card.Header>
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
