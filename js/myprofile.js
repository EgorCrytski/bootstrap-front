function myprofile()
{
var url  = "http://localhost:8000/api/v1/library/user/me/";
var xhr  = new XMLHttpRequest();
xhr.open('Get', url, false);
xhr.setRequestHeader("Authorization", "JWT "+JSON.parse(sessionStorage.getItem("access")));

xhr.onload = function () {
    var user = JSON.parse(xhr.responseText);
    var txt ='';
    if (xhr.readyState == 4 && xhr.status == "200") {
        txt +="<table border='1' class='table table-dark'>";
        txt+="<tr><td>ID</td><td>Username</td><td>Last login</td><td>Date joined</td></tr>"
        txt+="<tr><td id='myid'>" + user.id + "</td>"
        txt+="<td>" + user.username + "</td>"
        txt+="<td>" + user.last_login + "</td>"
        txt+="<td>"+user.date_joined +"</td></tr>"
        txt+="</table>"
        document.getElementById('myprofile').innerHTML = txt;
        console.table(user);
        jsondata = user;
    } else {
        console.error(user);

    }
}
xhr.send(null);


}