import { getDatabase, ref, set, update, get, child } from "firebase/database";
export async function checknewuser(uid) {
    try {
        const dbRef = ref(getDatabase());
        const data = await get(child(dbRef, `Students/`))
        const snapshot = data.val()
        for (var key in snapshot) {
            if (key === uid) {
                console.log(key, uid)
                return false
            }
        }
        return true

    }

    catch (e) {
        console.log(e);
    }
}