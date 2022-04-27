import { getDatabase, ref, set } from "firebase/database";
export function adduserdata(object,uid){
    try{
        console.log(object.studentName);
        console.log(object)
        const db = getDatabase();
    set(ref(db,'STUDENTS/'+uid+'/'),object);
    
    }
    catch(e){
        console.log(e)
    }
}