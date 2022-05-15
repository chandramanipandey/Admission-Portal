import React from 'react'
import NavigationBar from '../NavigationBar'
import { StudentDashboardPage } from '../DashboardPage'
import Footer from '../Footer'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
export default function StudentView() {
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
					history.push('/', "You are not authorised to visit this website, if you are an authorised user please login to continue");
				}
			}
			);
		}
		catch (e) {
			console.log(e);
		}
	}, [])
	return (
		<div>
			<NavigationBar userType="Student" userName="User Name" />

			<StudentDashboardPage />

			<Footer />
		</div>
	)
}
