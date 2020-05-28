// Initialize Firebase 
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBUC6fC1dnj9fCIAqowYuwUlzsvknbyUnE",
    authDomain: "the-right-swipe-409f9.firebaseapp.com",
    databaseURL: "https://the-right-swipe-409f9.firebaseio.com",
    projectId: "the-right-swipe-409f9",
    storageBucket: "the-right-swipe-409f9.appspot.com",
    messagingSenderId: "1048291636935",
    appId: "1:1048291636935:web:32b88ef6288ab9608130e2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // I will always start in the Card 01 where my story begins.
  // If user swipes to the right it goes to Card 02

  function rightBtn () {
    window.alert("swipe to the right")
  }

  function leftBtn () {
    window.alert("swipe to the left")
  }

