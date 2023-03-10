import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDF-IA_qcJG3_XcT4vL1OoQjeEF5c_HQCA",
  authDomain: "content-creator-f9986.firebaseapp.com",
  projectId: "content-creator-f9986",
  storageBucket: "content-creator-f9986.appspot.com",
  messagingSenderId: "96662629669",
  appId: "1:96662629669:web:52d798e2d617076a02becc",
};

const app = firebase.initializeApp(firebaseConfig);
export default app;

