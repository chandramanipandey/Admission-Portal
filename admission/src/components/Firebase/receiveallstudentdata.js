import { getDatabase, ref, set,update,get,child } from "firebase/database";
export async function receiveallstudentfromfirebase(){
    try{
            var allstudentdata = [];
            const dbRef = ref(getDatabase());
            const data  = await get(child(dbRef, `STUDENTS/`))
            const snapshot = data.val()
            for(var key in snapshot){
                const data = snapshot[key];
                const formdata = data.Admission_Data;
                allstudentdata[key]=formdata;
            }
            return allstudentdata;

    }

    catch(e){
        console.log(e);
    }
}