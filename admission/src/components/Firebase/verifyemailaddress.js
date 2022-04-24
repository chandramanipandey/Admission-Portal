import { Alert } from "react-bootstrap";
import Firebaseauth from "./firebase";

export function verifyEmail(){
    try{
        const response = Firebaseauth.auth().currentUser.sendEmailVerification();
        throw"error";
    }
    catch(e){
        <Alert variant="danger">{e}</Alert>
    }    
}