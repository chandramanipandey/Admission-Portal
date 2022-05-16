import { getDatabase, ref, set, update, get, child } from "firebase/database";
export async function receivenotice() {
  try {
    const dbRef = ref(getDatabase());
    const data = await get(child(dbRef, `Notice/`));
    const snapshot = data.val();
    // console.log("recived notices", snapshot)
    return snapshot;
  } catch (e) {
    console.log(e);
  }
}

export async function studentreceivenotice(studentclass, department) {
  try {
    const dbRef = ref(getDatabase());
    const data = await get(child(dbRef, `Notice/`));
    const snapshot = data.val();
    // console.log(snapshot);
    const studentnotices = [];
    for (var key in snapshot) {
      const notice = snapshot[key];
      //   console.log(snapshot[key]);
      //   console.log(department);
      if (notice[studentclass] && notice["department"] === department) {
        // console.log("EHlool");
        studentnotices[key] = notice;
      }
    }
    console.log(studentnotices);
    return studentnotices;
  } catch (e) {
    console.log(e);
  }
}
