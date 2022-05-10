import { getDatabase, ref, set, update, get, child } from "firebase/database";
export async function receiveallpendingpaymentsfromfirebase() {
    try {
        var allstudentdata = [];
        const dbRef = ref(getDatabase());
        const data = await get(child(dbRef, `STUDENTS/`))
        const snapshot = data.val()
        for (var key in snapshot) {
            const AllData = snapshot[key];
            if (AllData !== undefined && AllData["Fees_Paid_Pending"]) {
                const userdata = AllData["User_Info"];
                const PendingFeesData = AllData["Fees_Paid_Pending"];
                allstudentdata[key] = {userdata:userdata,PendingFeesData:PendingFeesData};

            }
        }
        return allstudentdata;

    }
    catch (e) {
        console.log(e);
    }
}