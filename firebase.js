import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAt0maccy-2Ohp8Hpzu13OmWRNS5FmRqqU",
    authDomain: "rexy-6a26c.firebaseapp.com",
    projectId: "rexy-6a26c",
    storageBucket: "rexy-6a26c.appspot.com",
    messagingSenderId: "984104121425",
    appId: "1:984104121425:web:285323f5a892bf64a4b470"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };