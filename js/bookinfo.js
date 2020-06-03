function bookinfo(uid,bid)
{
var url  = "http://localhost:8000/api/v1/library/user/"+uid+"/book/"+bid;
var xhr  = new XMLHttpRequest();
xhr.open('Get', url, false);
xhr.setRequestHeader("Authorization", "JWT "+JSON.parse(sessionStorage.getItem("access")));

xhr.onload = function () {
    var book = JSON.parse(xhr.responseText);
    var txt ='';
    if (xhr.readyState == 4 && xhr.status == "200") {
        txt +="<table border='1' class='table table-dark'>";
        txt+="<tr><td>ID</td><td>Book name</td><td>Book year</td><td>Book author</td></tr>"
            txt+="<tr><td>" + book.id + "</td>"
            txt+="<td>" + book.book_name + "</td>"
            txt+="<td>" + book.book_year + "</td>"
            txt+="<td>"+book.book_author +"</td></tr>"
            txt+="</table>"
        document.getElementById('bookinfo').innerHTML = txt;
        console.table(book);
    } else {
        console.error(book);

    }
}
xhr.send(null);


}