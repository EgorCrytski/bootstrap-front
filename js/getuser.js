
    var url  = "http://localhost:8000/api/v1/library/user/1/";
    var xhr  = new XMLHttpRequest()
    xhr.open('Get', url, false);
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhr.send(null);
