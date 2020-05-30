function login(log, pwd)
{
var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8000/api/v1/token/', false);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) return;
  if (xhr.status != 200) {
    console.log(xhr.status + ': ' + xhr.statusText);
  } else
  {
    console.log(xhr.responseText);
    json = JSON.parse(xhr.responseText);
    sessionStorage.setItem('access', JSON.stringify(json.access));
    sessionStorage.setItem('refresh', JSON.stringify(json.refresh));
  }
}

xhr.send(JSON.stringify({username: log, password: pwd}));
}