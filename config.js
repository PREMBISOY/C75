import firebase from "firebase";
require("@firebase/firestore");

// const firebaseConfig = {
//   apiKey: "AIzaSyA8URZYNDZM816bx1US9DXMz1Ra0bzrH9o",
//   authDomain: "wilyapp-d4952.firebaseapp.com",
//   projectId: "wilyapp-d4952",
//   storageBucket: "wilyapp-d4952.appspot.com",
//   messagingSenderId: "690423895839",
//   appId: "1:690423895839:web:0fc9718379abab5c14822a"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDGEtfX8VRLyjfLp2rtF-Kwxm8bE9lHIHo",
  authDomain: "library-database-c605d.firebaseapp.com",
  projectId: "library-database-c605d",
  storageBucket: "library-database-c605d.appspot.com",
  messagingSenderId: "283638815605",
  appId: "1:283638815605:web:9997968cfa090d23ffd13c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
