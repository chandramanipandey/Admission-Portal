import { getDatabase, ref, update } from "firebase/database";
export function admingeneratenotice(uid, noticeblock) {
    try {
        const datevar = new Date();
        const date = datevar.getDate().toString();
        const month = datevar.getMonth().toString();
        const year = datevar.getFullYear().toString();
        const Hour = datevar.getHours().toString();
        const Minutes = datevar.getMinutes().toString();
        const Seconds = datevar.getSeconds().toString();
        const keyname = uid + '-' + date + '|' + month + '|' + year + '-' + Hour + ':' + Minutes + ':' + Seconds;
        const Timestamp = date + '|' + month + '|' + year + '-' + Hour + ':' + Minutes + ':' + Seconds;
        noticeblock['Timestamp'] = Timestamp;
        const db = getDatabase();
        update(ref(db, 'Notice/'), { [keyname]: noticeblock });


    }
    catch (e) {
        console.log(e)
    }
}
//Function call
// admingeneratenotice(auth.currentUser.uid,{
//     name:'UC Patkar',
//     notice:'HOD meeting at 12 30',
// });