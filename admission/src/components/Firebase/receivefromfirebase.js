import { getDatabase, ref, set,update,get,child } from "firebase/database";
export async function receivefromfirebase(uid){
    try{
        const dbRef = ref(getDatabase());
        const data  = await get(child(dbRef, `STUDENTS/${uid}`))
        const snapshot = data.val()
        return(snapshot);
    }

    catch(e){
        console.log(e);
    }
}