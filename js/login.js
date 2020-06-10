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

function currentuser()
{
var url  = "http://localhost:8000/api/v1/library/user/me/";
var xhr  = new XMLHttpRequest();
xhr.open('Get', url, false);
xhr.setRequestHeader("Authorization", "JWT "+JSON.parse(sessionStorage.getItem("access")));

xhr.onload = function () {
    var user = JSON.parse(xhr.responseText);
    var txt ='';
    if (xhr.readyState == 4 && xhr.status == "200") {
        txt +="<h4>Logged as: "+user.username+"</h4>";
        txt +="<button class='btn btn-outline-success my-2 my-sm-0' onclick='logout()'>Logout</button>";
        document.getElementById('loginform').innerHTML = txt;
        console.table(user);
        jsondata = user;
    } else {
        txt +="<input class='form-control mr-sm-2' type='login' name='log' placeholder='Login' aria-label='Login'><input class='form-control mr-sm-2' type='password' name='pwd' placeholder='Password' aria-label='Password'><button class='btn btn-outline-success my-2 my-sm-0' type='submit' onclick='login(this.form.log.value, this.form.pwd.value)'>Login</button>";
                document.getElementById('loginform').innerHTML = txt;

        console.error(user);

    }
}
xhr.send(null);
}

function logout()
{
    sessionStorage.setItem('access', null);
    sessionStorage.setItem('refresh', null);
}