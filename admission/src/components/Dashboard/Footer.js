import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Footer() {
	const history = useHistory();
  return (
		<div>
			<footer className='bg-dark text-white fixed-bottom '>
				<Row className='align-items-center' style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
					<Col md={4}>
						<div class="p-3" >
							Bharati Vidyapeeth College of Engineering Lavale Pune
						</div>
					</Col>
					<Col style = {{textAlign:'center'}} className=''>
						<a  onClick={()=>history.push('/Aboutus')} className='text-decoration-none text-white'>About Developers</a>
					</Col>
					<ul class="nav col-md-4 justify-content-end list-unstyled d-flex align-items-center">
						<li class="ms-3 pr-3"><a class="text-muted" href="http://bvcoe.bharatividyapeeth.edu/"><i class="fa-brands fa-google fa-2x"></i></a></li>
						<li class="ms-3 pr-3"><a class="text-muted" href="https://www.instagram.com/bvcoelavale/"><i class="fa-brands fa-instagram fa-2x"></i></a></li>
						<li class="ms-3 pr-3"><a class="text-muted" href="https://www.facebook.com/BVCOELPune/"><i class="fa-brands fa-facebook fa-2x"></i></a></li>
						<li class="ms-3 pr-3"><a class="text-muted" href="https://www.youtube.com/channel/UCgzCrb2jwMPgNWo2TOxqXMQ/featured"><i class="fa-brands fa-youtube fa-2x"></i></a></li>
						<li class="ms-3 pr-3"><a class="text-muted" href="https://t.me/bvcoel"><i class="fa-brands fa-telegram fa-2x"></i></a></li>


						
						
					</ul>
					
				</Row>
			</footer>
		</div>
		)
};