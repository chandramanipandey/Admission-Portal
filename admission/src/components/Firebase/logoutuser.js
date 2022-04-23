import Firebaseauth from "./firebase";
import { Alert } from "react-bootstrap";
export function logout(){
    try{
        const response = Firebaseauth.auth().signOut();
    }
    catch(e){
        <Alert variant="danger">{e}</Alert>
    }
}