import { getDatabase, ref, set,update,get,child } from "firebase/database";
export async function receivefromfirebase(uid,subsection){
    try{
        if(subsection!=null){
            const dbRef = ref(getDatabase());
            const data  = await get(child(dbRef, `STUDENTS/${uid}/${subsection}/`))
            const snapshot = data.val()
            return(snapshot);
        }
        else {
            const dbRef = ref(getDatabase());
            const data  = await get(child(dbRef, `STUDENTS/${uid}/`))
            const snapshot = data.val()
            return(snapshot);
            
        }

    }

    catch(e){
        console.log(e);
    }
}