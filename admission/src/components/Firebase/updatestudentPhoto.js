import { getAuth, updateProfile } from "firebase/auth";

export async function updatePhoto(name, photo) {
    try {
        const auth = getAuth();
        await updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
        console.log('photo is uploaded')
    }
    catch (e) {
        console.log(e);
    }
}
