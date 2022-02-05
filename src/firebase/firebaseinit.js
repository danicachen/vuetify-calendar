import { initializeApp } from "firebase/app"
import { getFirestore} from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyC2Z5tdrV01rmb6-P8CK77VkgsNT3b2J8o",
    authDomain: "vue-calendar-3093a.firebaseapp.com",
    projectId: "vue-calendar-3093a",
    storageBucket: "vue-calendar-3093a.appspot.com",
    messagingSenderId: "398043989622",
    appId: "1:398043989622:web:134198d29b5500a950c157",
    measurementId: "G-M6HX486FTV"
});

const db = getFirestore();
export default db