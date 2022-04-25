
// ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
  
  apiKey: "AIzaSyCYLG5QOa7cq8u7GFTYiro-ySznkdACrEY",
  authDomain: "lavanya-test-yhnw.firebaseapp.com",
  databaseURL: "https://lavanya-test-yhnw-default-rtdb.firebaseio.com",
  projectId: "lavanya-test-yhnw",
  storageBucket: "lavanya-test-yhnw.appspot.com",
  messagingSenderId: "153575221085",
  appId: "1:153575221085:web:ac57c052f0ceaf94fe6ab4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);




function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


