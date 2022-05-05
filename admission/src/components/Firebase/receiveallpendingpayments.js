import { getDatabase, ref, set,update,get,child } from "firebase/database";
export async function receiveallpendingpaymentsfromfirebase(){
    try{
            var allstudentdata = [];
            const dbRef = ref(getDatabase());
        const data  = await get(child(dbRef, `STUDENTS/`))
        const PendingPayment = await get(child(dbRef, `All_Fee_Receipts/`))
        const snapshot = data.val()
        const snapshot2 = PendingPayment.val();
            for(var key in snapshot2){
                const data = snapshot[key];
                const userdata = data.Admission_Data;
                const PendingFeesData = data.Fees_Paid_Pending-Approval;
                allstudentdata[studentName] = userdata.studentName;
                allstudentdata[feesDetails] = PendingFeesData;
            }
            console.log(allstudentdata);
            //return allstudentdata;

    }

    catch(e){
        console.log(e);
    }
}