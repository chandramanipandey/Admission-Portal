import { getAuth } from "firebase/auth";
import { getDatabase, update, ref } from "@firebase/database";

export async function addroletofirebase(uid,email,role,department){
    const auth = getAuth();
    try{
        const db = getDatabase();
        update(ref(db,'Users_Roles/'+uid+'/'),{email:email,role:role,department:department})
 
       }catch(e){
           console.log(e);
       }
       
}