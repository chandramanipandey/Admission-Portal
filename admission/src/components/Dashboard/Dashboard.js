import React from 'react'
import NavigationBar from "./NavigationBar"
import {AdminDashboardPage, StudentDashboardPage} from "./DashboardPage"

export default function Dashboard() {
    return (
        <div>
            <NavigationBar userType="Admin" userName="User Name"/>

            Admin Dashboard
            <AdminDashboardPage />

            Student Dashboard
            <StudentDashboardPage />

        </div>
    )
}
