import { getDatabase, ref, set, update, get, child } from "firebase/database";
export async function receivenotice() {
    try {

        const dbRef = ref(getDatabase());
        const data = await get(child(dbRef, `Notice/`))
        const snapshot = data.val()
        // console.log("recived notices", snapshot)
        return (snapshot);

    }
    catch (e) {
        console.log(e);
    }
}