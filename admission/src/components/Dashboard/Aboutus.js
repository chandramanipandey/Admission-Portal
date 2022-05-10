import React from 'react';
import  "../CSS/Aboutus.css";
import { Button } from 'react-bootstrap';
import udaychandrakantpatkar from '../Assets/patkarsir.jpg'
import chandramanipandey from '../Assets/chandramani.jpg'
import harshitpanse from '../Assets/harshit.jpg'
import priyanshusingh from '../Assets/priyanshu.jpg'
import shubhambhavsar from '../Assets/shubham.jpg'
export default function Aboutus() {
  return (
  <div>
    <div class="about-section">

    <h1 style={{fontFamily:'monospace'}}>About Us</h1><br></br>
    <p>This project is developed by Students of Final year CSE Students Under the prestigious guidance of Our Mentor Prof. Uday Chandrakant Patkar sir of esteemed Bharati Vidyapeeth College of Engineering Lavale . </p>
    <br></br>
    <p>
      This project is developed to digitalize the<i> Student Admission Process </i> which was previously done by organisation using Old methods of paperwork or rely on third party softwares like Google Forms. In addition to this the project has following benefits Also our Future Views on this project is mentioned below.
      <ul style={{textAlign:'left'}}>
        <li>Admin panel to Maintain stability accross platform and perform administrative task</li>
        <li>Maintain an excellent Central Student Database for all Departments</li>
        <li>Online Student Admission Process</li>
        <li>Online Fee Payment acknowledgement (Note: - Fees can be paid by any method by student but this is used for acknowledgement that college has recieved your fee payment done via any platform)</li>
        <li>Online Notice Generation</li>
        <li>Hostel Admission <strong>COMING SOON!</strong></li>
        <li>Exam Department Activities <strong>COMING SOON!</strong></li>
        <li>Payment Gateway Integration <strong>COMING SOON!</strong></li>
        <li>Other Administrative Tasks and Other Important Features <strong>COMING SOON!</strong></li>
      </ul>
    </p>
  </div>
  
   <br></br><br></br>
  <h2 style={{textAlign:'center',fontFamily:'cursive'}}>Who we are ...</h2>
  <br></br><br></br>
  <div class="row">
    <div class="column">
      <div class="card text-white border-dark bg-dark mb-3">
        <img src={udaychandrakantpatkar} alt="logo"   style={{width:'100%'}}/> 
        <div class="container">
          <h2 style={{fontFamily:'Cambria'}}>Prof. Uday Chandrakant Patkar</h2>
          <p class="title">Mentor</p>
          <p>Computer Engineering </p>
          <p><i>Uday.patkar@bharatividyapeeth.edu</i></p>
          <p ><a href='https://outlook.live.com/mail/0/deeplink/compose?to=Uday.patkar@bharatividyapeeth.edu'><button class="button text-dark bg-white">Contact</button></a></p>
        </div>
      </div>
    </div>
  

    <div class="column">
      <div class="card text-white border-dark bg-dark mb-3">
        <img src={chandramanipandey} alt="logo"   style={{width:'100%'}}/> 
        <div class="container">
          <h2 style={{fontFamily:'Cambria'}}>Chandramani Pandey</h2>
          <p class="title">Developer</p>
          <p>BE Computer Engineering</p>
          <p><i>chandramani.pandey-bvcoel@bvp.edu.in</i></p>
          <p ><a href='https://outlook.live.com/mail/0/deeplink/compose?to=chandramani.pandey-bvcoel@bvp.edu.in'><button class="button text-dark bg-white">Contact</button></a></p>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card text-white border-dark bg-dark mb-3">
        <img src={harshitpanse} alt="logo"   style={{width:'100%'}}/> 
        <div class="container">
          <h2 style={{fontFamily:'Cambria'}}>Harshit Panse</h2>
          <p class="title">Developer</p>
          <p>BE Computer Engineering</p>
          <p><i>harshit.panse-bvcoel@bvp.edu.in</i></p>
          <p ><a href='https://outlook.live.com/mail/0/deeplink/compose?to=harshit.panse-bvcoel@bvp.edu.in'><button class="button text-dark bg-white">Contact</button></a></p>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card text-white border-dark bg-dark mb-3">
        <img src={priyanshusingh} alt="logo"   style={{width:'100%'}}/> 
        <div class="container">
          <h2 style={{fontFamily:'Cambria'}}>Priyanshu Singh</h2>
          <p class="title">Developer</p>
          <p >BE Computer Engineering</p>
          <p><i>priyanshu.singh-bvcoel@bvp.edu.in</i></p>
          <p ><a href='https://outlook.live.com/mail/0/deeplink/compose?to=priyanshu.singh-bvcoel@bvp.edu.in'><button class="button text-dark bg-white">Contact</button></a></p>
        </div>
      </div>
    </div>


    <div class="column">
      <div class="card text-white border-dark bg-dark mb-3">
        <img src={shubhambhavsar} alt="logo"   style={{width:'100%'}}/>
        <div class="container">
          <h2  style={{fontFamily:'Cambria'}}>Shubham Bhavsar</h2>
          <p class="title">Developer</p>
          <p>BE Computer Engineering</p>
          <p><i>Shubham.bhavsar-bvcoel@bvp.edu.in</i></p>
          <p ><a href='https://outlook.live.com/mail/0/deeplink/compose?to=Shubham.bhavsar-bvcoel@bvp.edu.in'><button class="button text-dark bg-white">Contact</button></a></p>
        </div>
      </div>
    </div>


    
  
  
  </div>
  </div>
		)
};


