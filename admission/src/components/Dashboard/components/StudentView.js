import React from 'react'
import NavigationBar from '../NavigationBar'
import { StudentDashboardPage } from '../DashboardPage'

export default function StudentView() {
	return (
		<div>
      <NavigationBar userType="Student" userName="User Name"/>

      <StudentDashboardPage />

			
		</div>
	)
}
