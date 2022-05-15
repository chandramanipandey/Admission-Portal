import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import NavigationBar from "../NavigationBar"
import { AdminDashboardPage, StudentDashboardPage } from "../DashboardPage"
import Footer from '../Footer'
import { onAuthStateChanged } from 'firebase/auth'
export default function AdminView() {
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
