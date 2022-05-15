import { getDatabase, ref, set, update, get, child } from "firebase/database";

export async function getrole(uid) {
    try {
        const role = null;
        const dbRef = ref(getDatabase());
        const data = await get(child(dbRef, `Users_Roles/` + uid + '/'))
        const snapshot = data.val()
        return [snapshot['role'], snapshot['department']];

    }

    catch (e) {
        return [null, null];
        console.log(e);
    }
}
export async function getallrole() {
    try {
        const allrole = ['dummymail@gmail.com'];
        const dbRef = ref(getDatabase());
        const data = await get(child(dbRef, `Users_Roles/`))
        const snapshot = data.val()
        for (var key in snapshot) {
            const data2 = snapshot[key]
            if (data2['role'] === 'Admin' || data2['role'] === 'HOD') {
                allrole.push(data2['email']);
            }
        }
        return allrole;
    }

    catch (e) {
        console.log(e);
    }
}