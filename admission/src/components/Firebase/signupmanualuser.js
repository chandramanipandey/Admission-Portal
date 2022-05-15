import { EmailAuthProvider, getAuth, reauthenticateWithCredential } from "firebase/auth";
import { getDatabase, update, ref } from "@firebase/database";
import { verifyEmail } from "./verifyemailaddress";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { logout } from "./logoutuser";
import { addroletofirebase } from "./addroletofirebase";
export async function manualsignUpUser(email,password,User_Info){
    const auth = getAuth();
    try{
        const response = await createUserWithEmailAndPassword(auth,email,password);
        verifyEmail();
        const db = getDatabase();
        const response2 = await addroletofirebase(response.user.auth.currentUser.uid,email,User_Info['Role'],User_Info['department'])
        update(ref(db,'Users/'+response.user.auth.currentUser.uid+'/'+'User_Info/'),User_Info)

       }catch(e){
           console.log('Failed to create an account'+"  "+e);
       }
       
}
// User_Info{
//     Name:,
//     officialemailid:,
//     phonenumber:,
//     designation:,
//     department:,
//     dateofbirth:
//     typeofidadminuser:,
// }

// function call example
// await manualsignUpUser("bvcoelcomp@gmail.com","123456",{
//     Name:'Admin Computer',
//     officialemailid:'bvcoelcomp@gmail.com',
//     phonenumber:'8888999977',
//     designation:'Administration',
//     department:'Computer Department',
//     dateofbirth:'12-7-2000',
//     Role:'Admin'
// });
// logout();
// history.push("/", "You have been logged out after creating a new user id, Please log in again to access the portal");