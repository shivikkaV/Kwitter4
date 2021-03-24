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
  firebase.analytics();

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
    //user_name = document.getElementById("user_name").value;
    //firebase.database().ref("/").child(user_name).update({
                //abcd: "find me"
   // });
}