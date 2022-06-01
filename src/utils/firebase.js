import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously, setPersistence, browserLocalPersistence, onAuthStateChanged } from "firebase/auth";
import { getFirestore, addDoc, collection, doc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { geohashForLocation } from "geofire-common";

const firebaseConfig = {
  apiKey: "AIzaSyCvprGFV_-tN_LEKbTdLr7uvEfmAsJZeyA",
  authDomain: "pavan-kulkarni.firebaseapp.com",
  databaseURL: "https://pavan-kulkarni-default-rtdb.firebaseio.com",
  projectId: "pavan-kulkarni",
  storageBucket: "pavan-kulkarni.appspot.com",
  messagingSenderId: "546347754230",
  appId: "1:546347754230:web:1e13686eea14b1daac82d7",
  measurementId: "G-CH2M97JF7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Services
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


/**
 * Auth
 */
let uid;
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    return signInAnonymously(auth);
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });

onAuthStateChanged(auth, (user) => {
  if (user) {
    uid = user.uid;
    console.log(uid);
    var lat, long
    navigator.geolocation.getCurrentPosition(getPos);
    function getPos(pos) {
      lat = pos.coords.latitude;
      long = pos.coords.longitude;
      const hash = geohashForLocation([lat, long]);

      setDoc(doc(db, 'testing_users', uid), {
        userId: uid,
        timestamp: new Date().getTime(),
        hash: hash,
        lat: lat,
        long: long
      });
    }
  }
})