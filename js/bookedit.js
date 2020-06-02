function bookedit(uid, bid, name, author, date)
{
var xhr = new XMLHttpRequest();
date = date+"T12:00:00Z";
xhr.open('PUT', "http://localhost:8000/api/v1/library/user/"+uid+"/book/"+bid+"/edit/", false);
xhr.setRequestHeader("Authorization", "JWT "+JSON.parse(sessionStorage.getItem("access")));
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) return;
  if (xhr.status != 200) {
    console.log(xhr.status + ': ' + xhr.statusText);
  } else
  {
    alert("Done");
  }
}

xhr.send(JSON.stringify({book_name: name, book_author: author, book_year: date}));
}