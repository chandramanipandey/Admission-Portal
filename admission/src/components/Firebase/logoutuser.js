import { getAuth, signOut } from "firebase/auth";
import { Alert } from "react-bootstrap";
export function logout(){
    
const auth = getAuth();
    try{
        signOut(auth);
    }
    catch(e){
        <Alert variant="danger">{e}</Alert>
    }
}



