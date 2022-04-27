import firebase from "../Firebase/firebase";
import Firebaseauth from "../Firebase/firebase";
export function adduserdata(object,uid){
    var reference = Firebaseauth.database().ref('/STUDENTS/'+uid+'/').update(object);
    return reference;
}
