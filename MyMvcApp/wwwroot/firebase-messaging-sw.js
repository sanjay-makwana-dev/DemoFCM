importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCbyEcFoAjlnKBG8P_UG4aqLVWzyRDPg0o",
    authDomain: "demoapp-fee05.firebaseapp.com",
    projectId: "demoapp-fee05",
    storageBucket: "demoapp-fee05.firebasestorage.app",
    messagingSenderId: "425154052473",
    appId: "1:425154052473:web:213f7e32e199cca14d6fa8"  
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );
    // Customize notification here
    //const notificationTitle = 'Background Message Title';
    //const notificationOptions = {
    //    body: 'Background Message body.',
    //    icon: '/firebase-logo.png'
    //};

    //self.registration.showNotification(notificationTitle, notificationOptions);
});

