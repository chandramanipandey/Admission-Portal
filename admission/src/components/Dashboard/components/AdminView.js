import React from 'react'
import NavigationBar from "../NavigationBar"
import {AdminDashboardPage, StudentDashboardPage} from "../DashboardPage"

export default function AdminView() {
	return (
		<div>

				<NavigationBar userType="Admin" userName="User Name"/>
				<div className='mt-3'>
					<AdminDashboardPage />
				</div>

		</div>
	)
}
