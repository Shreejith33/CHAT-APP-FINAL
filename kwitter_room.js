var firebaseConfig = {
      apiKey: "AIzaSyCBr520C9_LW4WbzGYMLDSwSR-gmNhnYYc",
      authDomain: "practice-73e8c.firebaseapp.com",
      databaseURL: "https://practice-73e8c-default-rtdb.firebaseio.com",
      projectId: "practice-73e8c",
      storageBucket: "practice-73e8c.appspot.com",
      messagingSenderId: "851850894260",
      appId: "1:851850894260:web:f97c1515aa5a95c5afb0e1"
    };
    
     firebase.initializeApp(firebaseConfig);

function Add_Room() 
{
   User_Name = document.getElementById("User_Name").value;
   firebase.database().ref("/").child(User_Name).update({purpose:"Adding User"});
}

  

function logout()
{
      localStorage.removeItem("Username");
      localStorage.removeItem("RoomName");
      window.location = "index.html";
}

function Add_Room()
{
      RoomName = document.getElementById("RoomName").value;
      firebase.database().ref("/").child(RoomName).update({ purpose : "adding room name" });
      localStorage.setItem("RoomName", RoomName);
      window.location = "kwitter_page.html";
}

function getData()
{
      firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + RoomNames);
      row="<div class='RoomName' id="+RoomNames+" onclick='redirectToRoomName(this.id)' >#"+ RoomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      })})
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4> "+ name +"</h4>";
      message_with_tag = "<h4 class='message_h4'>"+ message +"</h4>";
      like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>Likes :"+ like +"</button>";
}


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("RoomName", name);
         window.location = "kwitter_page.html";
}

function send() 
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(RoomName).push({
      name:user_name,
      message:msg,
      like:0
  });

  document.getElementById("msg").value=""
}


