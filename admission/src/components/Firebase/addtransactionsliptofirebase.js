import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from './firebase'
import { getDatabase, ref as databaseref, update } from "firebase/database";
import { stringify } from "@firebase/util";


export async function addpaymentreceipt(uid, file, TransactionData) {
    try {

        const datevar = new Date();
        const date = datevar.getDate().toString();
        const month = datevar.getMonth().toString();
        const year = datevar.getFullYear().toString();
        const Hour = datevar.getHours().toString();
        const Minutes = datevar.getMinutes().toString();
        const Seconds = datevar.getSeconds().toString();
        const keyname = uid + '-' + date + '|' + month + '|' + year + '-' + Hour + ':' + Minutes + ':' + Seconds;
        const Timestamp = date + '|' + month + '|' + year + '-' + Hour + ':' + Minutes + ':' + Seconds;
        const filename = Timestamp + '.jpg'
        TransactionData['Timestamp'] = Timestamp

        const storageRef = ref(storage, `Fee_Receipts/${uid}/${filename}`);
        const uploadTask = await uploadBytes(storageRef, file);
        const downloadlink = await getDownloadURL(uploadTask.ref);

        delete TransactionData['transactionReceipt'];
        TransactionData['Receipt'] = downloadlink;
        // Add latest receipt links to Fee_receipts in rtdb
        const db = getDatabase();
        update(databaseref(db, 'All_Fee_Receipts/'), { [keyname]: TransactionData });
        return downloadlink;
    }
    catch (e) {
        console.log(e);
    }

}
