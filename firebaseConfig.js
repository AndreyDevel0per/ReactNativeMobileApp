import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2Yiq3svNXHtuL8J8F2J0ArHnmdZCmmJ0",
    authDomain: "reactnativemobileapp-665d3.firebaseapp.com",
    projectId: "reactnativemobileapp-665d3",
    storageBucket: "reactnativemobileapp-665d3.firebasestorage.app",
    messagingSenderId: "405240582863",
    appId: "1:405240582863:web:45c97d15d5821318c3ddba"
};

const app = initializeApp(firebaseConfig);

// Для аутентификации с AsyncStorage
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export { auth, getFirestore };