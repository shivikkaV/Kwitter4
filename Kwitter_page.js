var firebaseConfig = {
    apiKey: "AIzaSyBgERWfOLr9ca7K6v54YWWdAygu2AnIw8g",
    authDomain: "kwitterprojects.firebaseapp.com",
    projectId: "kwitterprojects",
    storageBucket: "kwitterprojects.appspot.com",
    messagingSenderId: "35634274818",
    appId: "1:35634274818:web:5908c3d2eb2ba9db6f7d1b",
    measurementId: "G-7Q9RY06FB1"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
 });

document.getElementById("msg").value = "";
}