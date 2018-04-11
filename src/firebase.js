import Firebase from 'firebase';

let config = {
    apiKey: 'AIzaSyDS_416A-DNK8J0pb1bxUBgGU7D-kuK9wc',
    authDomain: 'rosidi-99cbf.firebaseapp.com',
    databaseURL: 'https://rosidi-99cbf.firebaseio.com',
    projectId: 'rosidi-99cbf',
    storageBucket: 'rosidi-99cbf.appspot.com',
    messagingSenderId: '1009264203957'
}

export const db = Firebase.initializeApp(config);