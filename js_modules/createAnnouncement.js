// Announcement Maker
function setCookie(cname, cvalue, exdays){
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname+"="+cvalue+";"+expires+";path=/";
  }
  function getCookie(cname){
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i=0; i<ca.length;i++){
      let c = ca[i];
      while (c.charAt(0)==' '){
      c = c.substring(1);
      }
      if(c.indexOf(name)==0){
      return c.substring(name.length,c.length);
      }
    }
    return "";
  }

async function validateAccount(c){    
  var token = getCookie("accToken")
  
  var r=await fetch('https://Gameshub-API.boomboommushroom.repl.co/tokeninfo?token='+token,{})
  .then(response => response.text())
  .then(data => {
    //console.log(JSON.parse(data))
    if(JSON.parse(data)!="COULDNT_FIND_TOKEN"){
      return JSON.parse(data)
    }
    else{ return {} }
  })
  var h = setInterval(()=>{
    if(r!=undefined){
      c(r,token)
      clearInterval(h)
    }
  },10)
}

// code form JavaScript section
function httpFetchJSON(url,callback,onError){
  fetch(url)
  .then(response=>response.json())
  .then(data=>callback(data))
  .catch(error=>onError(error))
}
function httpFetchText(url,callback,onError){
  fetch(url)
  .then(response=>response.text())
  .then(data=>callback(data))
  .catch(error=>onError(error))
}

function f(){
  console.log("Code entered now checking accout!")

  // Validate Token
  validateAccount(contin)
  function contin(account,token){
    var isAdmin = account.IsAdmin == true
    if(!isAdmin) return
    console.log("The user is an Admin... proceeding")
    var announcement = ""
    var code = "000000"
    var times = 0
    while(announcement==""){
      if(times>=5){
        break
      }
      var a = prompt("Give an annoucement to send")
      var b = prompt("6 Digit Admin Auth Code")
      if(a.replaceAll(" ", "")!=""){
        announcement = a
      }
      code = b
      times++
    }
    if(announcement=="") return
    var announce_URL = "https://Gameshub-API.boomboommushroom.repl.co/announce"
    // takes 'a' and 'code' as params
    httpFetchText(announce_URL+"?a="+announcement+"&code="+code, s)
  }
  function s(data){
    console.log(data)
  }
}

const code = "W A S D ENTER".split(" ")
const keycodes2 = {
  "W": 87,
  "A": 65,
  "S": 83,
  "D": 68,
  "ENTER": 13,
}
var codeIndex2 = 0

document.addEventListener("keydown",(event)=>{
  const keyCode = event.keyCode
  //console.log(keyCode)
  var reqKeycode = keycodes2[code[codeIndex2]]
  if(codeIndex2>=code.length-1){f();codeIndex2=0;}
  if(keyCode==reqKeycode){
    codeIndex2 += 1
  } else{
    codeIndex2 = 0
  }
})