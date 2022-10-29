/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBNJAQz1xujXFnsaPT0Pu65yJ3eMkbg2yY",
	authDomain: "villanuevaexpress-c6d32.firebaseapp.com",
	projectId: "villanuevaexpress-c6d32",
	storageBucket: "villanuevaexpress-c6d32.appspot.com",
	messagingSenderId: "82786445386",
	appId: "1:82786445386:web:eabe35e880015e3e181eb3",
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);
