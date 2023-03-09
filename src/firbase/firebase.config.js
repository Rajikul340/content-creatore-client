import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDF-IA_qcJG3_XcT4vL1OoQjeEF5c_HQCA",
  authDomain: "content-creator-f9986.firebaseapp.com",
  projectId: "content-creator-f9986",
  storageBucket: "content-creator-f9986.appspot.com",
  messagingSenderId: "96662629669",
  appId: "1:96662629669:web:52d798e2d617076a02becc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth;
