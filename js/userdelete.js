function userdelete(uid)
{
var xhr = new XMLHttpRequest();
xhr.open('POST', "http://localhost:8000/api/v1/library/user/"+uid+"/delete/", false);
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

xhr.send(JSON.stringify({username: name}));
}