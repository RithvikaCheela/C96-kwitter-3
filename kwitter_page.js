//FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyArN1gGpMzBr__3zENGy_IMEv9Fx5MWEdg",
      authDomain: "kwitter-1-73926.firebaseapp.com",
      databaseURL: "https://kwitter-1-73926-default-rtdb.firebaseio.com",
      projectId: "kwitter-1-73926",
      storageBucket: "kwitter-1-73926.appspot.com",
      messagingSenderId: "244863537990",
      appId: "1:244863537990:web:04f7bfa8a3d7c6947b0b47"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
   msg=document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0
   });
   document.getElementById("msg").innerHTML="";
}