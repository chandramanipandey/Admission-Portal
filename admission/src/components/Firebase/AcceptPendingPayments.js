import { getDatabase, ref, update, set } from "firebase/database";
export async function acceptpendingpayments(List) {
    try {

        for (var k in List) {
            const data = List[k];
            const key = k + '-' + data['Timestamp']
            delete data['Timestamp'];
            const db = getDatabase();
            await update(ref(db, `All_Fee_Receipts/${key}/`), { status: data['status'], Acceptedby: data['Acceptedby'],key: k });
            await set(ref(db, `STUDENTS/${k}/Fees_Paid_Pending/`), null);
            await update(ref(db, `STUDENTS/${k}/Fees_Paid_Accepted/`), data);
        }

    }
    catch (e) {
        console.log(e)
    }
}

 // Data Object format
        //     uid:{
        //         transactionid:transactionid,
        //         Timestamp:Timestamp,
        //         status:status
        //         Acceptedby:name
        //     }
        // }
