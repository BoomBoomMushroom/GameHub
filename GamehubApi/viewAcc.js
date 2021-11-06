var recentActions = []

// Starter
const firstVar = window.location.href.split("?")[1] || null
const placeholderAdvancements = []

function loadData(m){
	m = JSON.parse(m)
	console.log(m)
  try{
  	var myDate = new Date(m.AccountCreationTime*1000)
	document.getElementById("pfp").src = "https://avatars.dicebear.com/api/identicon/"+m.Username+".svg"
    document.getElementById("accountUsername").innerHTML = m.Username + " - Money: " + m.GameshubData.Money +" - " + myDate.toLocaleString().split(",")[0]
  }
  catch(err){
	  document.getElementById("pfp").src = "https://avatars.dicebear.com/api/identicon/"+m.Username+".svg"
  	document.getElementById("accountUsername").innerHTML = m.Username + " - Money: " + m.GameshubData.Money +" - Invailid Date"
  }
  document.getElementById("accountUUID").innerHTML = "UUID: "+m.UUID
  
	// Badges loader
  if(m.Badges.length>0){
  	document.getElementById("badgesHeader").style.display = "block"
  	for(var i=0;i<m.Badges.length;i++){
    	var currentFriend = m.Badges[i]
      document.getElementById("accountbadges").innerHTML += currentFriend.html
    }
  }
  // Friends loader
  if(m.Friends.length>0){
  	document.getElementById("friendsHeader").style.display = "block"
  	for(var i=0;i<m.Friends.length;i++){
    	var currentFriend = m.Friends[i]
      var newEle = document.createElement("p")
      newEle.innerHTML = JSON.stringify(currentFriend)
      document.getElementById("accountFriends").appendChild(newEle)
      
      var brEle = document.createElement("br")
      document.getElementById("advancementsHeader").appendChild(brEle)
    }
  }
  // Advancement loader
  var advancements = m.GameshubData.Advancements
  if(advancements.length>0){
  	document.getElementById("advancementsHeader").style.display = "block"
    for(var i=0;i<advancements.length;i++){
    	var CurrentAdv = advancements[i]
      if(CurrentAdv.img!="None"){
      	document.getElementById("advancementsHeader").innerHTML += "<br><img src='"+CurrentAdv.img+"'></img><strong>"+CurrentAdv.header+"</strong> "+CurrentAdv.desc
      } else{
      	document.getElementById("advancementsHeader").innerHTML += "<br><strong>"+CurrentAdv.header+"</strong> "+CurrentAdv.desc
      }
    }
  }
}

var timer22 = setInterval(() => {
  	try{
    	if(ws.readyState==1){
        recentActions = ["getAcc"]
        setTimeout(function(){
        	if(firstVar.split("=")[0]=="username"){
        		ws.send("gameshub-api.herokuapp.com;/getaccount?username="+firstVar.split("=")[1]+";GET")
          } else{
          	// ws.send("gameshub-api.herokuapp.com;/getaccount?username=BBM;GET")
          }
        },50)
        //ws.send("gameshub-api.herokuapp.com;/getaccount?username=dEx;GET")
        clearInterval(timer22)
      }
    }
    catch(err){}
  },50)
// End of Starter



function loader(){
	sendReason()

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

document.onload = loader()

function sendReason(){
	var time = setInterval(() => {
  	try{
    	ws.send('REASON-Gameshub_Api')
      	ws.send('username-undefined')
		ws.send("gameshub-api.herokuapp.com;/getaccount?username="+firstVar.split("=")[1]+";GET")
      clearInterval(time)
    }
    catch(err){
    	// console.log('ERROR',err)
    }
  },50)
}

function sendMsg(msg){
	ws.send( msg )
}
