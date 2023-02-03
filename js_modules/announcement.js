//Show Annoucnement
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

httpFetchJSON("https://gameshub-api.academyofcode1.repl.co/getannouncement",(data)=>{
    var currentEpoch = Math.ceil(Date.now()/1000)
  var lastAnnouncement = parseInt(getCookie("lastAnnouncement"))
  if(isNaN(lastAnnouncement)){
    showAnnouncement(data)
  }
  else if(data.timestamp != lastAnnouncement){
      showAnnouncement(data)
  }
})

function showAnnouncement(d){
  //alert(d.announcement)
  setCookie("lastAnnouncement",d.timestamp.toString(),365*20)
}
