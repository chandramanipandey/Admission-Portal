import App from 'firebase/app';
import Auth from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCGNPOVRnKXrwq_V2HwH5xJzEP4poGxT04",
    authDomain: "admission-portal-f17b0.firebaseapp.com",
    projectId: "admission-portal-f17b0",
    storageBucket: "admission-portal-f17b0.appspot.com",
    messagingSenderId: "180162515429",
    appId: "1:180162515429:web:211e1fb6529e8e6078df0c"
  };
  
 const Firebaseauth = App.initializeApp(firebaseConfig);
 export default Firebaseauth;