// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDj1eoC38pFbgjoprIi4UL3Gq4n9miVjho",
      authDomain: "kwitter-55dda.firebaseapp.com",
      databaseURL: "https://kwitter-55dda-default-rtdb.firebaseio.com",
      projectId: "kwitter-55dda",
      storageBucket: "kwitter-55dda.appspot.com",
      messagingSenderId: "276614630157",
      appId: "1:276614630157:web:6fcb4058d221e0c2b8be44"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("room name-"+Room_names);
      row="<div class=room_name' id="+Room_name" onclick='redirectoroomname(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;


      //End code
      });});}
getData();

function redirectoroomname(name){
      console.log(name);
      localStorage.setitem("room_name, ",name);
      window.location="kwitetr_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_name");
      window.location="kwitter.html";
}

function send(){
      msg=document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}     