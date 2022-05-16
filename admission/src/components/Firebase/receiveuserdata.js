import { getDatabase, ref, set, update, get, child } from "firebase/database";
export async function receiveusersfromfirebase(uid, subsection) {
    try {
        if (subsection != null) {
            const dbRef = ref(getDatabase());
            const data = await get(child(dbRef, `Users/${uid}/${subsection}/`))
            const snapshot = data.val()
            return (snapshot);
        }
        else {
            const dbRef = ref(getDatabase());
            const data = await get(child(dbRef, `Users/${uid}/`))
            const snapshot = data.val()
            return (snapshot);

        }

    }

    catch (e) {
        console.log(e);
    }
}