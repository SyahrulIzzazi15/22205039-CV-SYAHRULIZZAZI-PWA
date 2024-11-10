importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-messaging.js");
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-analytics.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
const config = {
  apiKey: "AIzaSyATt1v4ZA-UkYxR2_dwuwf9TX91N5Sh6WQ",
  authDomain: "pwa-uts.firebaseapp.com",
  projectId: "pwa-uts",
  storageBucket: "pwa-uts.appspot.com",
  messagingSenderId: "1080332847260",
  appId: "1:1080332847260:web:106fa68fb71701eeeb0559",
  measurementId: "G-34HPWQ8SS0",
};

firebase.initializeApp({
  messagingSenderId: "13383968446",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notification = JSON.parse(payload.data.notification);
  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
