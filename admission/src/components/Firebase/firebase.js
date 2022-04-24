import App from 'firebase/app';
import Auth from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC_-CbfnNZur84b0_ppjYDRuOXejouJyeI",
  authDomain: "college-management-syste-2bd18.firebaseapp.com",
  databaseURL: "https://college-management-syste-2bd18-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "college-management-syste-2bd18",
  storageBucket: "college-management-syste-2bd18.appspot.com",
  messagingSenderId: "972457920826",
  appId: "1:972457920826:web:a9122d7dd4d749a97de803"
};
  
 const Firebaseauth = App.initializeApp(firebaseConfig);
 export default Firebaseauth;