import React from 'react'
import NavigationBar from '../NavigationBar'
import { StudentDashboardPage } from '../DashboardPage'
import Footer from '../Footer'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { receivefromfirebase } from '../../Firebase/receivefromfirebase'
export default function StudentView() {
	const auth = getAuth();
	const history = useHistory();
	const [userauth, setuserauth] = useState(undefined)
	const [UserInfo, setUserInfo] = useState([]);
	const [userName,setUserName] = useState('User')
	useEffect(() => {
		try {
			receiveuserinfo();
			auth.onAuthStateChanged((authobj) => {
				if (authobj) {
					setuserauth(authobj.uid)
				}
				else {
					history.push('/', "You are not authorised to visit this website, if you are an authorised user please login to continue");
				}
			}
			);
			
		}
		catch (e) {
			console.log(e);
		}
	}, [])
	async function receiveuserinfo() {
		const response = await receivefromfirebase(auth.currentUser.uid, 'User_Info');
		localStorage.setItem('User_Info', JSON.stringify(response));
		setUserInfo(response);
		setUserName(response['userName'])
	}
	return (
		<div>
			<NavigationBar userType="Student" userName={userName} />
			<StudentDashboardPage />

			<Footer />
		</div>
	)
}
