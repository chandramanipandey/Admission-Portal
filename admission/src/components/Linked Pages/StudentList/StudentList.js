import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Tabs, Tab } from "react-bootstrap";

import { getAuth } from "firebase/auth";
import NavigationBar from "../../Dashboard/NavigationBar";
import StudentTable from "../../Linked Pages/StudentList/StudentTable";
import { onAuthStateChanged } from "firebase/auth";
import { receiveallstudentfromfirebase } from "../../Firebase/receiveallstudentdata";

export default function StudentList() {
   const auth = getAuth();
   const history = useHistory();
   const [userauth, setuserauth] = useState(undefined)
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
      }
      catch (e) {
         console.log(e);
      }
   }, [])
   const data = [
      {
         "firstYear": [
            {
               "name": "Ajay Kothari",
               "prn": "36253786211",
               "department": "computer Science",
               "class": "abc",
               "rollno": "09",
               "dob": "03/05/2000",
               "category": "obc",
               "feesPaid": "no",
               "pendingFees": "30000",
               "totalFees": "85500"
            },
            {
               "name": "Ajay Kothari",
               "prn": "36253786212",
               "department": "computer Science",
               "class": "abc",
               "rollno": "09",
               "dob": "03/05/2000",
               "category": "obc",
               "feesPaid": "no",
               "pendingFees": "30000",
               "totalFees": "85500"
            },
            {
               "name": "Ajay Kothari",
               "prn": "36253786213",
               "department": "computer Science",
               "class": "abc",
               "rollno": "09",
               "dob": "03/05/2000",
               "category": "obc",
               "feesPaid": "no",
               "pendingFees": "30000",
               "totalFees": "85500"
            },
            {
               "name": "Ajay Kothari",
               "prn": "36253786214",
               "department": "computer Science",
               "class": "abc",
               "rollno": "09",
               "dob": "03/05/2000",
               "category": "obc",
               "feesPaid": "no",
               "pendingFees": "30000",
               "totalFees": "85500"
            }
         ]
      },
      {
         "secondYear": [
            {
               "name": "Ajay Kothari",
               "prn": "36253786215",
               "department": "computer Science",
               "class": "abc",
               "rollno": "09",
               "dob": "03/05/2000",
               "category": "obc",
               "feesPaid": "no",
               "pendingFees": "30000",
               "totalFees": "85500"
            },
            {
               "name": "Ajay Kothari",
               "prn": "36253786216",
               "department": "computer Science",
               "class": "abc",
               "rollno": "09",
               "dob": "03/05/2000",
               "category": "obc",
               "feesPaid": "no",
               "pendingFees": "30000",
               "totalFees": "85500"
            },
            {
               "name": "Ajay Kothari",
               "prn": "36253786217",
               "department": "computer Science",
               "class": "abc",
               "rollno": "09",
               "dob": "03/05/2000",
               "category": "obc",
               "feesPaid": "no",
               "pendingFees": "30000",
               "totalFees": "85500"
            },
            {
               "name": "Ajay Kothari",
               "prn": "36253786218",
               "department": "computer Science",
               "class": "abc",
               "rollno": "09",
               "dob": "03/05/2000",
               "category": "obc",
               "feesPaid": "no",
               "pendingFees": "30000",
               "totalFees": "85500"
            }
         ]
      },
      {
         "thirdYear": [
            {
               "name": "Ajay Kothari",
               "prn": "36253786219",
               "department": "computer Science",
               "class": "abc",
               "rollno": "09",
               "dob": "03/05/2000",
               "category": "obc",
               "feesPaid": "no",
               "pendingFees": "30000",
               "totalFees": "85500"
            },
            {
               "name": "Ajay Kothari",
               "prn": "36253786220",
               "department": "computer Science",
               "class": "abc",
               "rollno": "09",
               "dob": "03/05/2000",
               "category": "obc",
               "feesPaid": "no",
               "pendingFees": "30000",
               "totalFees": "85500"
            },
            {
               "name": "Ajay Kothari",
               "prn": "36253786221",
               "department": "computer Science",
               "class": "abc",
               "rollno": "09",
               "dob": "03/05/2000",
               "category": "obc",
               "feesPaid": "no",
               "pendingFees": "30000",
               "totalFees": "85500"
            },
            {
               "name": "Ajay Kothari",
               "prn": "36253786222",
               "department": "computer Science",
               "class": "abc",
               "rollno": "09",
               "dob": "03/05/2000",
               "category": "obc",
               "feesPaid": "no",
               "pendingFees": "30000",
               "totalFees": "85500"
            }
         ]
      },
      {
         "finalYear": [
            {
               "name": "Ajay Kothari",
               "prn": "36253786223",
               "department": "computer Science",
               "class": "abc",
               "rollno": "09",
               "dob": "03/05/2000",
               "category": "obc",
               "feesPaid": "no",
               "pendingFees": "30000",
               "totalFees": "85500"
            },
            {
               "name": "Ajay Kothari",
               "prn": "36253786224",
               "department": "computer Science",
               "class": "abc",
               "rollno": "09",
               "dob": "03/05/2000",
               "category": "obc",
               "feesPaid": "no",
               "pendingFees": "30000",
               "totalFees": "85500"
            },
            {
               "name": "Ajay Kothari",
               "prn": "36253786225",
               "department": "computer Science",
               "class": "abc",
               "rollno": "09",
               "dob": "03/05/2000",
               "category": "obc",
               "feesPaid": "no",
               "pendingFees": "30000",
               "totalFees": "85500"
            },
            {
               "name": "Ajay Kothari",
               "prn": "36253786226",
               "department": "computer Science",
               "class": "abc",
               "rollno": "09",
               "dob": "03/05/2000",
               "category": "obc",
               "feesPaid": "no",
               "pendingFees": "30000",
               "totalFees": "85500"
            }
         ]
      }
   ];

   const [key, setKey] = useState(1);
   const [studentData, setStudentData] = useState(data[0]?.firstYear);


   async function keyCheck(key) {
      if (key == 1) {
         setKey(key);
         setStudentData(studentData);
      };
      if (key == 2) {
         setKey(key);
         setStudentData(data[1]?.secondYear);
      };
      if (key == 3) {
         setKey(key);
         setStudentData(data[2]?.thirdYear);
      };
      if (key == 4) {
         setKey(key);
         setStudentData(data[3]?.finalYear);
      };
   }

   return (
      <>
         <NavigationBar userType="Admin" userName="User Name" />
         <div className="row align-items-md-stretch w-100">
            <div className="col-md">
               <div className="h-100 p-5 text-white bg-dark rounded-3">
                  <h1>Students List</h1>
               </div>
            </div>
         </div>

         <hr />
         <div>
            <Tabs
               id="controlled-tab-example"
               activeKey={key}
               onSelect={(k) => keyCheck(k)}
               className="mb-3"
            >
               <Tab eventKey={1} title="First Year" >
                  <StudentTable studentData={studentData} key={studentData?.prn} />
               </Tab>

               <Tab eventKey={2} title="Second Year" >
                  <StudentTable studentData={data[1]?.secondYear} key={studentData?.prn} />
               </Tab>

               <Tab eventKey={3} title="Third Year">
                  <StudentTable studentData={data[2]?.thirdYear} key={studentData?.prn} />
               </Tab>

               <Tab eventKey={4} title="Final Year">
                  <StudentTable studentData={data[3]?.finalYear} key={studentData?.prn} />
               </Tab>
            </Tabs>
         </div>
      </>
   );
}
