function getuserlist()
{
var url  = "http://localhost:8000/api/v1/library/user/all/";
var xhr  = new XMLHttpRequest();
xhr.open('Get', url, false);
xhr.setRequestHeader("Authorization", "JWT "+JSON.parse(sessionStorage.getItem("access")));

xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    var txt ='';
    if (xhr.readyState == 4 && xhr.status == "200") {
        txt +="<table border='1' class='table table-dark'>";
        txt+="<tr><td>ID</td><td>Username</td><td>Superuser</td></tr>"
        for (x in users){

            txt+="<tr><td>" + users[x].id + "</td>"
            txt+="<td>" + users[x].username + "</td>"
            txt+="<td>"+users[x].is_superuser +"</td></tr>"
            }
            txt+="</table>"
        document.getElementById('userlist').innerHTML = txt;
        console.table(users);
        alert(xhr.responseText);
        jsondata = users;
    } else {
        console.error(users);

    }
}
xhr.send(null);


}