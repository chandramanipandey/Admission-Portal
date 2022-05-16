import { getDatabase, ref, set, update, get, child } from "firebase/database";
export async function receivependingfeesstatus(uid) {
    try {

        const dbRef = ref(getDatabase());
        const data = await get(child(dbRef, `STUDENTS/${uid}/Fees_Paid_Accepted/`))
        const snapshot = data.val()
        console.log(snapshot)
        return (snapshot);
    }

    catch (e) {
        console.log(e);
    }
}