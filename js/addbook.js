function func(name, author, date, url)
{
var xhr = new XMLHttpRequest();
var uid = document.getElementById("myid").innerHTML;
alert(uid);
date = date+"T12:00:00Z";
xhr.open('POST', url, false);
xhr.setRequestHeader("Authorization", "JWT "+JSON.parse(sessionStorage.getItem("access")));
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) return;
  if (xhr.status != 201) {
    console.log(xhr.status + ': ' + xhr.statusText);
  } else
  {
    alert("Done");
  }
}
xhr.send(JSON.stringify({book_name: name, book_author: author, book_year: date, user: uid}));
}

function addBookMy(name, author, date)
{
    url = "http://localhost:8000/api/v1/library/book/add/myself/";
    func(name, author, date, url);

}

function addBook(name, author, date)
{
    url = "http://localhost:8000/api/v1/library/book/add/";
    func(name, author, date, url);
}


