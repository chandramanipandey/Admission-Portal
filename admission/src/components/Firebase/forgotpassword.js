import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export async function resetpassword(email){
try{
    const auth = getAuth();
    const response = sendPasswordResetEmail(auth, email);    
}
catch(e){
    console.log(e);
}
}