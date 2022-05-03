import { getDatabase, ref, update } from "firebase/database";
export function adduserdata(object,uid,subsection){
    try{
    if(subsection!=null){
        const db = getDatabase();
        update(ref(db,'STUDENTS/'+uid+'/'+subsection+'/'),object);
        
    }
    else{
        const db = getDatabase();
        update(ref(db,'STUDENTS/'+uid+'/'),object);    
        
    }
    }
    catch(e){
        console.log(e)
    }
}