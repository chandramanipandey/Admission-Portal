import { getDatabase, ref, set, update, get, child } from "firebase/database";
export async function receiveallstudentfromfirebase() {
    try {
        var allstudentdata = [];
        const dbRef = ref(getDatabase());
        const data = await get(child(dbRef, `STUDENTS/`))
        const snapshot = data.val()
        for (var key in snapshot) {
            const alldata = snapshot[key];
            const userInfo = alldata["User_Info"];
            const admissionInfo = alldata["Admission_Data"];
            allstudentdata[key] = {userInfo:userInfo,admissionInfo:admissionInfo};
    
        }
        return allstudentdata

    }

    catch (e) {
        console.log(e);
    }
}