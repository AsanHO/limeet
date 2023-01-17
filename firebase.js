import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
/* import { API_KEY, PROJECT_ID, SENDER_ID, APP_ID } from "@env";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: `${PROJECT_ID}.firebaseapp.com`,
  projectId: PROJECT_ID,
  storageBucket: `${PROJECT_ID}.appspot.com`,
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
}; */

const getAuth = auth();
const db = firestore();
const getStorage = storage();

export { getAuth, db, getStorage };
