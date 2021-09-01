function loader(){
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
  function getDarkmode(cookieName){
  	if(getCookie(cookieName)==""){
    	return false
    }
    else{
    	return true
    }
  }
  darkmode = getDarkmode("theme")
  
  if(darkmode==true){
    var darkmodeColor = "#2C2F33"
    paragraphs = document.getElementsByTagName("p")
    document.body.style.background = darkmodeColor
    for(var x=0;x<paragraphs.length;x++){
      para = paragraphs[x]
      para.style.color = "#ffffff"
      // para.classList.add("darkmode_text")
    }
  }
}

window.onload = loader()
