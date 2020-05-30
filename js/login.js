var xhr = new XMLHttpRequest();
var url = "http://localhost:8000/api/v1/token/";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json.username + ", " + json.password);
    }
};
var data = JSON.stringify({"username": "admin", "password": "admin"});
xhr.send(data);