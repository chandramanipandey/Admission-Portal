import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from './firebase'
import { getDatabase, ref as databaseref, update } from "firebase/database";


export async function addpaymentreceipt(uid, file) {
    try {
        const datevar = new Date();
        const date = datevar.getDate().toString();
        const month = datevar.getMonth().toString();
        const year = datevar.getFullYear().toString();
        const filename = date + '-' + month + '-' + year + '.jpg'
        const storageRef = ref(storage, `Fee_Receipts/${uid}/${filename}`);
        const uploadTask = await uploadBytes(storageRef, file);
        const downloadlink = await getDownloadURL(uploadTask.ref);

        // Add latest receipt links to Fee_receipts in rtdb
        const db = getDatabase();
        update(databaseref(db, 'All_Fee_Receipts/'), { [uid]: downloadlink });
        return downloadlink;
    }
    catch (e) {
        console.log(e);
    }

}
