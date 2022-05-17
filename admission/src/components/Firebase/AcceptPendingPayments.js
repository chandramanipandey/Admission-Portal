import { getDatabase, ref, update, set } from "firebase/database";
export async function acceptpendingpayments(studentdata, Acceptedby) {
    try {


        const key = studentdata['key'] + '-' + studentdata['Timestamp']
        const data = {
            transactionid: studentdata['transactionId'],
            Timestamp: studentdata['Timestamp'],
            status: 'Accepted',
            Acceptedby: Acceptedby
        }
        const db = getDatabase();
        await update(ref(db, `All_Fee_Receipts/${key}/`), { status: data['status'], Acceptedby: data['Acceptedby'], key: key });
        await set(ref(db, `STUDENTS/${studentdata['key']}/Fees_Paid_Pending/`), null);
        await update(ref(db, `STUDENTS/${studentdata['key']}/Fees_Paid_Accepted/`), data);


    }
    catch (e) {
        console.log(e)
    }
}
