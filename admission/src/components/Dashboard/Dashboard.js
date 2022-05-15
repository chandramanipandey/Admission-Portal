import React from 'react'
import NavigationBar from "./NavigationBar"
import { AdminDashboardPage, StudentDashboardPage } from "./DashboardPage"
import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { receivefromfirebase } from '../Firebase/receivefromfirebase';
import { useHistory } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

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

            auth.onAuthStateChanged((authobj) => {
                if (authobj) {
                    setuserauth(authobj.uid)
                }
                else {
                    history.push('/', "You are not authorised to visit this website or you have recently logged out successfully, if you are an authorised user please login to continue");
                }
            }
            );
            fetchUserData();
        }
        catch (e) {
            console.log(e);
        }
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
