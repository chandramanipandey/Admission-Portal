
import { getAuth } from "firebase/auth";
import { getDatabase, update, ref } from "@firebase/database";

export async function addfeestructure(year, studentclass, object) {
    const auth = getAuth();
    try {
        const db = getDatabase();
        update(ref(db, 'Fees_Structure/' + year + '/' + studentclass + '/'), object)

    } catch (e) {
        console.log(e);
    }

}