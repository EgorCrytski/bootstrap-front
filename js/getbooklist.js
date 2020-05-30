var url  = "http://localhost:8000/api/v1/library/book/all/";
var xhr  = new XMLHttpRequest();
xhr.open('Get', url, false);
xhr.setRequestHeader("Authorization", "JWT "+JSON.parse(sessionStorage.getItem("access")));
xhr.onload = function () {
    var books = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(books);
    } else {
        console.error(books);
    }
}
xhr.send(null);