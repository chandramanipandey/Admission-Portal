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
        const filename = date + '-' + month + '-' + year + '.jpg'
        const keyname = uid + '-' + date + '-' + month + '-' + year;
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
