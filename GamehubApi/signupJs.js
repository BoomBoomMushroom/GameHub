const usernameInput = document.getElementById("usernameInput")
const passwordInput = document.getElementById("passwordInput")

var recentActions = []
var signedIn = false

function onSubmit() {
  inputUsername = usernameInput.value
  inputPassword = passwordInput.value
  if (inputUsername.length >= 3 && inputUsername.length <= 16 && inputPassword.length >= 8) {
    sendMsg('gameshub-api.herokuapp.com;/signup?username=' + inputUsername + '&password=' + inputPassword + ';GET');
    console.log('gameshub-api.herokuapp.com;/signup?username=' + inputUsername + '&password=' + inputPassword + ';GET')
    recentActions.push("Signup")
  }
}

// Cookie Functions
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Websocket
window.onopen = sendReason()

function sendReason() {
  var time = setInterval(() => {
    try {
      ws.send('REASON-Gameshub_Api')
      ws.send('username-undefined')
      clearInterval(time)
    } catch (err) {
      // console.log('ERROR',err)
    }
  }, 50)
}

function sendMsg(msg) {
  ws.send(msg)
}
