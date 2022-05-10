import React from 'react';
// import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';
import { Col, Row } from 'react-bootstrap';

export default function Footer() {
  return (
		<div>
			<footer className='bg-dark text-white fixed-bottom '>
				<Row className='align-items-center' style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
					<Col md={4}>
						<div class="p-3" >
							Bharati Vidyapeeth College of Engineering Lavale Pune
						</div>
					</Col>
					<Col className=''>
						<a href='#' className='text-decoration-none text-white'>About Devs</a>
					</Col>
					<ul class="nav col-md-4 justify-content-end list-unstyled d-flex align-items-center">
						<li class="ms-3 pr-3"><a class="text-muted" href="#"><i class="fa-brands fa-instagram fa-2x"></i></a></li>
						<li class="ms-3 pr-3"><a class="text-muted" href="https://www.facebook.com/BVCOELPune/"><i class="fa-brands fa-facebook fa-2x"></i></a></li>
						<li class="ms-3 pr-3"><a class="text-muted" href="#"><i class="fa-brands fa-twitter fa-2x"></i></a></li>
						<li class="ms-3 pr-3"><a class="text-muted" href="https://t.me/bvcoel"><i class="fa-brands fa-telegram fa-2x"></i></a></li>
					</ul>
				</Row>
			</footer>
		</div>
		)
};