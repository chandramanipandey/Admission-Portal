import React from 'react'
import NavigationBar from "./NavigationBar"
import { AdminDashboardPage, StudentDashboardPage } from "./DashboardPage"
import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { receivefromfirebase } from '../Firebase/receivefromfirebase';

export default function Dashboard() {
    const auth = getAuth();
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState({ Name: 'Name' });
    async function fetchUserData() {
        let response = await receivefromfirebase(auth.currentUser.uid, "User_Info");
        localStorage.setItem('userInfo', response);
        setUserData(response);
    }

    useEffect(() => {
        fetchUserData()
        console.log("useEffect Running")
    }, [])
    return (
        <div>
            <NavigationBar userType="Admin" userName={userData.userName} />

            Admin Dashboard
            <AdminDashboardPage />

            Student Dashboard
            <StudentDashboardPage />

        </div>
    )
}
