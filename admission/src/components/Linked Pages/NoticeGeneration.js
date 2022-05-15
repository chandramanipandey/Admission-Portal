import React, { useState, useEffect } from 'react'
import NavigationBar from '../Dashboard/NavigationBar'
import Footer from '../Dashboard/Footer'
import JumbotronDark from './components/JumbotronDark'
import GenerateNewNotice from './components/GenerateNewNotice'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useHistory } from 'react-router-dom'
export default function NoticeGeneration() {
	const auth = getAuth();
	const history = useHistory();
	const [userauth, setuserauth] = useState(undefined);
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
			<NavigationBar userType="Admin" />
			<JumbotronDark title={"Notice Generation"} />

			<GenerateNewNotice />


			<Footer />
		</div>
	)
}
