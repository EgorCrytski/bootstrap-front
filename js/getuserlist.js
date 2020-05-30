function getuserlist()
{
var url  = "http://localhost:8000/api/v1/library/user/all/";
var xhr  = new XMLHttpRequest();
xhr.open('Get', url, false);
xhr.setRequestHeader("Authorization", "JWT "+JSON.parse(sessionStorage.getItem("access")));
jsondata = null;
xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
        alert(xhr.responseText);
        jsondata = users;
    } else {
        console.error(users);
        jsondata = users;
    }
}
xhr.send(null);
return jsondata;
}