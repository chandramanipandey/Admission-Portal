import React,{useRef,useEffect, useState} from 'react';
import {Form, Button,Card,CardGroup,Alert} from 'react-bootstrap';
import Firebaseauth from '../Firebase/firebase';
import logo from '../Assets/logo1.jpg';
import {Link,useHistory} from 'react-router-dom';
export default function Auth() {
    const emailRef=useRef();
    const passwordRef=useRef();
    const passwordConfirmRef=useRef();
    const loginemailRef=useRef();
    const loginpasswordRef=useRef();
    const [error,setError] = useState('');
    const [loginerror,setLoginError] = useState('');
    const [loading,setLoading] = useState(false);
    const [user,setUser] = useState();
    const [submitsuccess,setSubmitsuccess] = useState(false);
    const [loginsuccess,setLoginsuccess] = useState(false);
    const history = useHistory();
    useEffect(() => {
    
    }, [])
    async function signUp(e){
        e.preventDefault();
   
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
         return setError('Passwords do not match');
        }
        try{
            setError('');
            setLoading(true);
            await Firebaseauth.auth().createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
            setSubmitsuccess(true);
            document.getElementById("signup-form").reset();
           }catch(e){
               setError('Failed to create an account'+"  "+e);
           }
           setLoading(false);
    }
    async function signIn(e){
        e.preventDefault();
   
        try{
            setLoginError('');
            setLoading(true);
            await Firebaseauth.auth().signInWithEmailAndPassword(loginemailRef.current.value, loginpasswordRef.current.value);
            setLoginsuccess(true);
            document.getElementById("signin-form").reset();
           }catch(e){
               setLoginError('Login Failed'+"  "+e);
           }
           setLoading(false);
           await history.push("/Dashboard");
    }
   
    return (
        <div style={{justifyContent:'center',alignContent:'center'}}>
        <div style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
        <img src={logo} alt = "" style={{width:'250px',height:'160px'}}/>
        </div>
        <div style={{paddingBottom: '10px',display:'flex',justifyContent:'center',alignContent:'center' ,fontFamily:"Times New Roman,sans-serif",color:"navy"}}>
        <h1>Bharati Vidyapeeth's College Of Engineering</h1>
        </div>
        <div style={{paddingBottom: '30px',display:'flex',justifyContent:'center',alignContent:'center' ,fontFamily:"Times New Roman,sans-serif",color:"dodgerblue"}}>
        <h2>Admission-Portal</h2>
        </div>
    <CardGroup >
      
        <Card border="success" style={{padding:'50px'}}>
            
        <Card.Body>
            <h1 className="text-center mb-4 " style={{fontFamily:"Times New Roman,sans-serif",color:"mediumseagreen"}}>Sign Up </h1>
            {error && <Alert variant="danger">{error}</Alert>}
                {submitsuccess && <Alert variant="success" style={{margin:'50px',width:'max-content'}}>You are Successfully registered on Admission-Portal</Alert>}
            {user && JSON.stringify(user.email)}
            <Form onSubmit={signUp} id="signup-form">
                <Form.Group className="mb-3" id="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref ={emailRef} autoComplete="on" required />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  ref={passwordRef} autoComplete="off" required/>
                </Form.Group>


                <Form.Group className="mb-3" id="password-confirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" ref={passwordConfirmRef} autoComplete="off" required />
                </Form.Group>


                <Button disabled={loading} className = "w-100" variant="success" type="submit" >
                    Submit
                </Button>
                </Form>
        </Card.Body>
        
        </Card>
        <div style={{margin:'50px'}}></div>
        <Card border="primary" style={{padding:'50px'}}>
            
            <Card.Body>
                <h1 className="text-center mb-4" style={{fontFamily:"Times New Roman,sans-serif",color:"mediumslateblue"}}>Sign In </h1>
                {loginerror && <Alert variant="danger">{loginerror}</Alert>}
                {loginsuccess && <Alert variant="success" style={{margin:'50px',width:'max-content'}}>You are Successfully Logged In on Admission-Portal</Alert>}
                <Form onSubmit={signIn} id="signin-form">
                    <Form.Group className="mb-3" id="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref ={loginemailRef} autoComplete="on" required />
                    <Form.Text className="text-muted">
                    Log in with your official email address, For ex advaita-bvcoel@bvp.edu.in.
                    </Form.Text>
                    </Form.Group>
    
                    <Form.Group className="mb-3" id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  ref={loginpasswordRef} autoComplete="on" required/>
                    </Form.Group>
    
    
                    <Button className = "w-100" variant="primary" type="submit">
                        Log In
                    </Button>
                    </Form>
            </Card.Body>
            
            </Card>

       
        </CardGroup>
        </div>
    )
}
