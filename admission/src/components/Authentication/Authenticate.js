import React,{useRef,useEffect, useState} from 'react';
import {Form, Button,Card,CardGroup,Alert} from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import logo from '../Assets/logo1.jpg';
import {Link,useHistory} from 'react-router-dom';
import { verifyEmail } from '../Firebase/verifyemailaddress';
import Firebaseauth from '../Firebase/firebase';
import { role } from '../Firebase/role';

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
    const allrole = role("allroles");
    const adminrole = role("admin");
    const csrole = role("csdepartment");
    const mrole = role("mdepartment");
    const crole = role("csdepartment");
    const erole = role("edepartment");
    useEffect(() => {
    
    }, [])
    async function signUp(e){
        const auth = getAuth();
        e.preventDefault();
   
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
         return setError('Passwords do not match');
        }
        try{
            setError('');
            setLoading(true);
            const emailcheck = emailRef.current.value;
            const checkemailbvpedu = emailcheck.split("-");
            if(checkemailbvpedu[1] !== "bvcoel@bvp.edu.in"){
                console.log(checkemailbvpedu[1],emailcheck);
                throw "Please Register on Portal using official Email ID only i.e example-bvcoel@bvp.edu.in ";
            }
            await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
            verifyEmail();
            setSubmitsuccess(true);
            document.getElementById("signup-form").reset();
           }catch(e){
               setError('Failed to create an account'+"  "+e);
           }
           setLoading(false);
    }
    async function signIn(e){       
        const auth = getAuth();
        e.preventDefault();
   
        try{
            setLoginError('');
            setLoading(true);
            const emailcheck = loginemailRef.current.value;
            const checkemailbvpedu = emailcheck.split("-");
            if(checkemailbvpedu[1] !== "bvcoel@bvp.edu.in"&&!allrole.includes(emailcheck)){
            throw "Since you are not using official college email id for example: example-bvcoel@bvp.edu.in ";
            }
        
            await signInWithEmailAndPassword(auth,loginemailRef.current.value, loginpasswordRef.current.value);
            if(!auth.currentUser.emailVerified){
                throw "Please verify your email to log in to portal, Check Junk/Spam emails if you have trouble finding email verification link";
            }
            if(adminrole.includes(emailcheck)){
               //admin login
                await history.push("/AdminView") 
            }
            else if(crole.includes(emailcheck)){
                //civil dept login
                await history.push("/Dashboard")                          
            }
            else if(csrole.includes(emailcheck)){
               //computer dept login
               await history.push("/Dashboard") 
                
            }
            else if(mrole.includes(emailcheck)){
               //mechanical dept login
               await history.push("/Dashboard") 
            }
            else if(erole.includes(emailcheck)){
               //electronics dept login
               await history.push("/Dashboard")     
            }
            else {
               //Student login
               await history.push("/StudentView")    
                
            }
            setLoginsuccess(true);  
            document.getElementById("signin-form").reset();
           }catch(e){
               setLoginError('Login Failed'+"  "+e);
           }
           setLoading(false);        
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
                {submitsuccess && <Alert variant="success" style={{width:'100%'}}>You are Successfully registered on Admission-Portal, An Email has been sent to you to verify your email on your official email id, Please verify your Email in order to login to Portal </Alert>}
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
                {loginsuccess && <Alert variant="success" style={{width:'100%'}}>You are Successfully Logged In on Admission-Portal</Alert>}
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
