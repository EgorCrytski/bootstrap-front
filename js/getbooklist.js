
    var url  = "http://localhost:8000/api/v1/library/book/all/";
    var xhr  = new XMLHttpRequest()
    xhr.open('Get', url, true)
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhr.send(null);
