import { getDatabase, ref, set, update, get, child } from "firebase/database";
export async function receiveallpendingpaymentsfromfirebase() {
    try {
        var allstudentdata = [];
        const dbRef = ref(getDatabase());
        const data = await get(child(dbRef, `STUDENTS/`))
        const PendingPayment = await get(child(dbRef, `All_Fee_Receipts/`))
        const snapshot = data.val()
        const snapshot2 = PendingPayment.val();
        for (var key in snapshot2) {
            const AllData = snapshot[key];
            if (AllData !== undefined) {
                const userdata = AllData["User_Info"];
                const PendingFeesData = AllData["Fees_Paid_Pending"];
                allstudentdata["StudentInfo"] = userdata;
                allstudentdata["PendingFeesInfo"] = PendingFeesData;
            }
        }
        return allstudentdata;

    }
    catch (e) {
        console.log(e);
    }
}