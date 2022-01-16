
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBy9opJMArqUAM5uqNs1OaX0w4n0mSNMnI",
    authDomain: "kwitter-ae388.firebaseapp.com",
    databaseURL: "https://kwitter-ae388-default-rtdb.firebaseio.com",
    projectId: "kwitter-ae388",
    storageBucket: "kwitter-ae388.appspot.com",
    messagingSenderId: "241106036029",
    appId: "1:241106036029:web:2a0cbce9ea615b42ec1154"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   function add_user() {

    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   }