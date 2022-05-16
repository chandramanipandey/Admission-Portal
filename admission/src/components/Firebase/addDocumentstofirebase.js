import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from './firebase'
import { getDatabase, ref as databaseref, update } from "firebase/database";
import { stringify } from "@firebase/util";


export async function addadmissiondocumentstofirebase(uid, file, filename) {
    try {

        // const datevar = new Date();
        // const date = datevar.getDate().toString();
        // const month = datevar.getMonth().toString();
        // const year = datevar.getFullYear().toString();
        // const Hour = datevar.getHours().toString();
        // const Minutes = datevar.getMinutes().toString();
        // const Seconds = datevar.getSeconds().toString();
        // const Timestamp = date + '|' + month + '|' + year + '-' + Hour + ':' + Minutes + ':' + Seconds;

        const storageRef = ref(storage, `Student_Data/${uid}/${filename}`);
        const uploadTask = await uploadBytes(storageRef, file);
        const downloadlink = await getDownloadURL(uploadTask.ref);

        return downloadlink;
    }
    catch (e) {
        console.log(e);
    }

}
