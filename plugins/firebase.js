import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAEbnnG2RA3QZuQvZbJjTCU3gyBoLxWJsE",
        authDomain: "coffeedaily-15055.firebaseapp.com",
        projectId: "coffeedaily-15055",
        storageBucket: "coffeedaily-15055.appspot.com",
        messagingSenderId: "846867293922",
        appId: "1:846867293922:web:c1e1fb1d3f85c32606a0bb",
        measurementId: "G-CV0NPBBX45"
    });
}

export default firebase