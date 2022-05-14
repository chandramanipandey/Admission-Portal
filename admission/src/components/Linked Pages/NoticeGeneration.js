import React from 'react'
import NavigationBar from '../Dashboard/NavigationBar'
import Footer from '../Dashboard/Footer'
import JumbotronDark from './components/JumbotronDark'
import GenerateNewNotice from './components/GenerateNewNotice'

export default function NoticeGeneration() {
	return (
		<div>
			<NavigationBar userType="Admin" />
			<JumbotronDark title={"Notice Generation"} />
			
			<GenerateNewNotice />


			<Footer />
		</div>
	)
}