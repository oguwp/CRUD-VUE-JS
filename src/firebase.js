import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyBzYuOURWn0hUB3pqeHyBT2Kv5bWTOS-ac",
  authDomain: "fir-8c644.firebaseapp.com",
  databaseURL: "https://fir-8c644.firebaseio.com",
  projectId: "fir-8c644-firebase",
  storageBucket: "fir-8c644-firebase.appspot.com",
  messagingSenderId: "870555076217",
  appId: "1:870555076217:web:afe633bd7a458bee7fb6a8",
};

firebase.initializeApp(config);

export default firebase.database();
