import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import NavigationBar from "../../Dashboard/NavigationBar";
import { onAuthStateChanged } from 'firebase/auth';

export default function StudentDetail(props) {
  const auth = getAuth();
  const history = useHistory();
  const [userauth, setuserauth] = useState(undefined)
  const [userAdmissionData,setuserAdmissionData] = useState(props.location.state.data);
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
  const { prn } = useParams();

  return (
    <>
      <NavigationBar userType="Admin" userName="User Name" />
      {/* {console.log('studentdetail page',)} */}
      <div className="row align-items-md-stretch w-100">
        <div className="col-md">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h1>Students List</h1>

          </div>
        </div>
      </div>
      <div>
        <h2>prn : {prn}</h2>
        <h2>prn : {userAdmissionData.aadharNo}</h2>
      </div>
    </>
  )
}