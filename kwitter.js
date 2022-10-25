function login()
{
    username = document.getElementById("UserName").value;
    localStorage.setItem("Username", username);
    window.location = "kwitter_room.html";
}