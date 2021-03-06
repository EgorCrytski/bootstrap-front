function getbooklist(id)
{
var url  = "http://localhost:8000/api/v1/library/book/all/";
var xhr  = new XMLHttpRequest();
xhr.open('Get', url, false);
xhr.setRequestHeader("Authorization", "JWT "+JSON.parse(sessionStorage.getItem("access")));

xhr.onload = function () {
    var books = JSON.parse(xhr.responseText);
    var txt ='';
    if (xhr.readyState == 4 && xhr.status == "200") {
        txt +="<table border='1' class='table table-dark'>";
        txt+="<tr><td>ID</td><td>Book name</td><td>Book year</td><td>Book author</td><td>Action</td></tr>"
        for (x in books){

            txt+="<tr><td>" + books[x].id + "</td>"
            txt+="<td>" + books[x].book_name + "</td>"
            txt+="<td>" + books[x].book_year + "</td>"
            txt+="<td>"+books[x].book_author +"</td>"
            txt+="<td><a href='./bookinfo.html?uid="+books[x].user+"&bid="+books[x].id+"'>View</a> <a href='./bookedit.html?uid="+books[x].user+"&bid="+books[x].id+"'>Edit</a></td></form></tr>"
            }
            txt+="</table>"
        document.getElementById('booklist').innerHTML = txt;
        console.table(books);
    } else {
        console.error(books);

    }
}
xhr.send(null);


}