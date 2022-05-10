import { getDatabase, ref, set } from "firebase/database";
export function admindeletenotice(key) {
    try {

        const db = getDatabase();
        set(ref(db, `Notice/${key}`), null);

    }
    catch (e) {
        console.log(e)
    }
}

//Function call
//const response2 = admindeletenotice('lKJYbuFAfFdvHdpFy7v3FEd2mQx2-11|4|2022-2:56:8');