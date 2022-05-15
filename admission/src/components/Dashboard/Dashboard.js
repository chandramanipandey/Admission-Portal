import React from 'react'
import NavigationBar from "./NavigationBar"
import { AdminDashboardPage, StudentDashboardPage } from "./DashboardPage"
import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { receivefromfirebase } from '../Firebase/receivefromfirebase';
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
    const auth = getAuth();
    const history = useHistory();
    const [userauth, setuserauth] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState({ Name: 'Name' });
    async function fetchUserData() {
        let response = await receivefromfirebase(auth.currentUser.uid, "User_Info");
        localStorage.setItem('userInfo', response);
        setUserData(response);
    }


    useEffect(() => {
        try {
            setuserauth(auth.currentUser.uid)
            fetchUserData()
            console.log("useEffect Running")
        }
        catch (e) {
            history.push('/', "You are not authorised to visit this website, if you are an authorised user please login to continue");
        }
    }, [auth])

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
