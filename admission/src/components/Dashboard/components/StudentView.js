import React from 'react'
import NavigationBar from '../NavigationBar'
import { StudentDashboardPage } from '../DashboardPage'
import Footer from '../Footer'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
export default function StudentView() {
	const auth = getAuth();
	const history = useHistory();
	const [userauth, setuserauth] = useState(undefined)
	useEffect(() => {
		try {
			setuserauth(auth.currentUser.uid)
		}
		catch (e) {
			history.push('/', e);
		}
	}, [auth])
	return (
		<div>
			<NavigationBar userType="Student" userName="User Name" />

			<StudentDashboardPage />

			<Footer />
		</div>
	)
}
