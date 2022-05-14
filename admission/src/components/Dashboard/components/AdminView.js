import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import NavigationBar from "../NavigationBar"
import { AdminDashboardPage, StudentDashboardPage } from "../DashboardPage"
import Footer from '../Footer'

export default function AdminView() {
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

			<NavigationBar userType="Admin" userName="User Name" />
			<div className='mt-3'>
				<AdminDashboardPage />
			</div>
			<Footer />


		</div>
	)
}
