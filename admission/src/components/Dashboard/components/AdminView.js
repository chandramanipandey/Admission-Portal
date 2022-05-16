import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import NavigationBar from "../NavigationBar"
import { AdminDashboardPage, StudentDashboardPage } from "../DashboardPage"
import Footer from '../Footer'
import { onAuthStateChanged } from 'firebase/auth'
import { receiveusersfromfirebase } from '../../Firebase/receiveuserdata'
export default function AdminView() {
	const auth = getAuth();
	const history = useHistory();
	const [UserInfo, setUserInfo] = useState([]);
	const [userauth, setuserauth] = useState(undefined)
	const [userName,setUserName] = useState('User')

	useEffect(() => {
		try {
			receiveuserinfo();

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
	async function receiveuserinfo() {
		const response = await receiveusersfromfirebase(auth.currentUser.uid, 'User_Info');
		localStorage.setItem('User_Info', JSON.stringify(response));;
		setUserInfo(response);
		setUserName(response['userName'])
	}
	return (
		<div>

			<NavigationBar userType="Admin" userName={userName} />
			<div className='mt-3'>
				<AdminDashboardPage />
			</div>
			<Footer />


		</div>
	)
}
