import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyA5GE1H_yAnG0-Syc-vu8SIdwR6G8pV-1M',
	authDomain: 'medium-next.firebaseapp.com',
	projectId: 'medium-next',
	storageBucket: 'medium-next.appspot.com',
	messagingSenderId: '366116202909',
	appId: '1:366116202909:web:490717b443adad5f906774',
	measurementId: 'G-S4NMNZ74HY'
};

if (!firebase.getApps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
