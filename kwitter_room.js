// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyDzFnHNylkc5149aDVgEOh7zkKRHU6AhaQ",
      authDomain: "kwitter-85ad6.firebaseapp.com",
      databaseURL: "https://kwitter-85ad6-default-rtdb.firebaseio.com",
      projectId: "kwitter-85ad6",
      storageBucket: "kwitter-85ad6.appspot.com",
      messagingSenderId: "101932165671",
      appId: "1:101932165671:web:1a8d5e860075d9d46cfc02",
      measurementId: "G-1VPRLDRQGG"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
