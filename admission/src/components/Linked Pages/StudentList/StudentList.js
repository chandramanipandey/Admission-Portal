import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Tabs, Tab } from "react-bootstrap";
import { getAuth } from "firebase/auth";
import NavigationBar from "../../Dashboard/NavigationBar";
import StudentTable from "../../Linked Pages/StudentList/StudentTable";
import { receiveallstudentfromfirebase } from "../../Firebase/receiveallstudentdata";

export default function StudentList() {
  const history = useHistory();
  const [studentList, setStudentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState(1);
  const [studentData, setStudentData] = useState([]);
  const [admissionData, setAdmissionData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const result = await receiveallstudentfromfirebase();
    console.log("total", result);
    const displayData1 = [];
    const displayData2 = [];

    for (var key in result) {
      const data = result[key];
      const userInfo = data["userInfo"];
      const admissionInfo = data["admissionInfo"];
      var admissiondata = [];
      var studentD = [];

      for (var key2 in userInfo) {
        studentD[key2] = userInfo[key2];
      }
      displayData1[key] = studentD;

      for (var key3 in admissionInfo) {
        admissiondata[key3] = admissionInfo[key3];
      }
      displayData2[key] = admissiondata;

      console.log(studentD, admissiondata);
    }

    // displayData1[key] = {'userInfo': userInfo, 'admissionInfo': admissionInfo };

    setStudentList(displayData1);
    setAdmissionData(displayData2);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
      setLoading(false);
      console.log("dtaa", studentList);
    }, 2000);
  }, []);

  const data = [
    {
      firstYear: [
        {
          name: "Ajay Kothari",
          prn: "36253786211",
          department: "computer Science",
          class: "abc",
          rollno: "09",
          dob: "03/05/2000",
          category: "obc",
          feesPaid: "no",
          pendingFees: "30000",
          totalFees: "85500",
        },
        {
          name: "Ajay Kothari",
          prn: "36253786212",
          department: "computer Science",
          class: "abc",
          rollno: "09",
          dob: "03/05/2000",
          category: "obc",
          feesPaid: "no",
          pendingFees: "30000",
          totalFees: "85500",
        },
        {
          name: "Ajay Kothari",
          prn: "36253786213",
          department: "computer Science",
          class: "abc",
          rollno: "09",
          dob: "03/05/2000",
          category: "obc",
          feesPaid: "no",
          pendingFees: "30000",
          totalFees: "85500",
        },
        {
          name: "Ajay Kothari",
          prn: "36253786214",
          department: "computer Science",
          class: "abc",
          rollno: "09",
          dob: "03/05/2000",
          category: "obc",
          feesPaid: "no",
          pendingFees: "30000",
          totalFees: "85500",
        },
      ],
    },
    {
      secondYear: [
        {
          name: "Ajay Kothari",
          prn: "36253786215",
          department: "computer Science",
          class: "abc",
          rollno: "09",
          dob: "03/05/2000",
          category: "obc",
          feesPaid: "no",
          pendingFees: "30000",
          totalFees: "85500",
        },
        {
          name: "Ajay Kothari",
          prn: "36253786216",
          department: "computer Science",
          class: "abc",
          rollno: "09",
          dob: "03/05/2000",
          category: "obc",
          feesPaid: "no",
          pendingFees: "30000",
          totalFees: "85500",
        },
        {
          name: "Ajay Kothari",
          prn: "36253786217",
          department: "computer Science",
          class: "abc",
          rollno: "09",
          dob: "03/05/2000",
          category: "obc",
          feesPaid: "no",
          pendingFees: "30000",
          totalFees: "85500",
        },
        {
          name: "Ajay Kothari",
          prn: "36253786218",
          department: "computer Science",
          class: "abc",
          rollno: "09",
          dob: "03/05/2000",
          category: "obc",
          feesPaid: "no",
          pendingFees: "30000",
          totalFees: "85500",
        },
      ],
    },
    {
      thirdYear: [
        {
          name: "Ajay Kothari",
          prn: "36253786219",
          department: "computer Science",
          class: "abc",
          rollno: "09",
          dob: "03/05/2000",
          category: "obc",
          feesPaid: "no",
          pendingFees: "30000",
          totalFees: "85500",
        },
        {
          name: "Ajay Kothari",
          prn: "36253786220",
          department: "computer Science",
          class: "abc",
          rollno: "09",
          dob: "03/05/2000",
          category: "obc",
          feesPaid: "no",
          pendingFees: "30000",
          totalFees: "85500",
        },
        {
          name: "Ajay Kothari",
          prn: "36253786221",
          department: "computer Science",
          class: "abc",
          rollno: "09",
          dob: "03/05/2000",
          category: "obc",
          feesPaid: "no",
          pendingFees: "30000",
          totalFees: "85500",
        },
        {
          name: "Ajay Kothari",
          prn: "36253786222",
          department: "computer Science",
          class: "abc",
          rollno: "09",
          dob: "03/05/2000",
          category: "obc",
          feesPaid: "no",
          pendingFees: "30000",
          totalFees: "85500",
        },
      ],
    },
    {
      finalYear: [
        {
          name: "Ajay Kothari",
          prn: "36253786223",
          department: "computer Science",
          class: "abc",
          rollno: "09",
          dob: "03/05/2000",
          category: "obc",
          feesPaid: "no",
          pendingFees: "30000",
          totalFees: "85500",
        },
        {
          name: "Ajay Kothari",
          prn: "36253786224",
          department: "computer Science",
          class: "abc",
          rollno: "09",
          dob: "03/05/2000",
          category: "obc",
          feesPaid: "no",
          pendingFees: "30000",
          totalFees: "85500",
        },
        {
          name: "Ajay Kothari",
          prn: "36253786225",
          department: "computer Science",
          class: "abc",
          rollno: "09",
          dob: "03/05/2000",
          category: "obc",
          feesPaid: "no",
          pendingFees: "30000",
          totalFees: "85500",
        },
        {
          name: "Ajay Kothari",
          prn: "36253786226",
          department: "computer Science",
          class: "abc",
          rollno: "09",
          dob: "03/05/2000",
          category: "obc",
          feesPaid: "no",
          pendingFees: "30000",
          totalFees: "85500",
        },
      ],
    },
  ];

  async function keyCheck(key) {
    if (key === 1) {
      setKey(key);
      setStudentData(studentList);
    }
    if (key === 2) {
      setKey(key);
      setStudentData(null);
    }
    if (key === 3) {
      setKey(key);
      setStudentData(data[2]?.thirdYear);
    }
    if (key === 4) {
      setKey(key);
      setStudentData(data[3]?.finalYear);
    }
  }
  function handleClick(prn) {
    history.push(`/StudentDetail/${prn}`);
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
          <Tab eventKey={1} title="First Year">
            {/* <StudentTable studentData={studentList} admissionData={admissionData} key={1} /> */}
            <>
              <Table className="project-list-table table-nowrap align-middle table-hover responsive-sm">
                <thead>
                  <tr>
                    <th>Prn</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>department</th>
                    <th>class</th>
                    <th>dob</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(studentList).map((key, value) => {
                    var data = studentList[key];
                    return (
                      <tr
                        key={data.prn}
                        onClick={() => handleClick(data.prn)}
                        style={{ cursor: "pointer" }}
                      >
                        <td>{data.prn}</td>
                        <td>{data.collegeEmail}</td>
                        <td>{data.studentName}</td>
                        <td>{data.department}</td>
                        <td>{data.class}</td>
                        <td>{data.dob}</td>
                        <td>{data.studentMobile}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </>
          </Tab>

          {/* <Tab eventKey={2} title="Second Year" >
            <StudentTable studentData={studentList} key={2}/>
          </Tab> */}

          {/* <Tab eventKey={3} title="Third Year">
            <StudentTable studentData={data[2]?.thirdYear} key={studentData?.prn}/>
          </Tab>

          <Tab eventKey={4} title="Final Year">
            <StudentTable studentData={data[3]?.finalYear} key={studentData?.prn}/>
          </Tab> */}
        </Tabs>
        {/* <div>
          <a
            name=""
            id=""
            class="btn btn-primary"
            href="#"
            role="button"
            onClick={() => fetchData()}
          >
            refresh
          </a>
        </div> */}
      </div>
    </>
  );
}
