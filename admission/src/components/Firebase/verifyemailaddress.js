import { Alert } from "react-bootstrap";
import { getAuth, sendEmailVerification } from "firebase/auth";

export function verifyEmail(){
    
const auth = getAuth();
    try{
        const response = sendEmailVerification(auth.currentUser);
    }
    catch(e){
        <Alert variant="danger">{e}</Alert>
    }    
}
