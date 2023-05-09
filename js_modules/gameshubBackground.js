function getMonth(){
	var monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	var d = new Date()
	var month = monthList[d.getMonth()]
	return month
}
function getDay(){
	return new Date().getUTCDate()
}

var backgrounds = ["https://raw.githubusercontent.com/BoomBoomMushroom/GameHub/main/GamehubApi/images/GH_Background.png",
	 "https://raw.githubusercontent.com/BoomBoomMushroom/GameHub/main/GamehubApi/images/GH_Background2.png",
	 "https://raw.githubusercontent.com/BoomBoomMushroom/GameHub/main/GamehubApi/images/GH_Background3.png",
	"https://raw.githubusercontent.com/BoomBoomMushroom/GameHub/main/GamehubApi/images/GH_Background4.png",
	"https://raw.githubusercontent.com/BoomBoomMushroom/GameHub/main/GamehubApi/images/GH_Background5.png",
	"https://raw.githubusercontent.com/BoomBoomMushroom/GameHub/main/GamehubApi/images/GH_Background6.png",
	"https://raw.githubusercontent.com/BoomBoomMushroom/GameHub/main/GamehubApi/images/GH_Background7.png"]
var spookySet = ["https://raw.githubusercontent.com/BoomBoomMushroom/GameHub/main/GamehubApi/images/Holloween_Background1.png",
		"https://raw.githubusercontent.com/BoomBoomMushroom/GameHub/main/GamehubApi/images/Holloween_Background2.png",
		"https://raw.githubusercontent.com/BoomBoomMushroom/GameHub/main/GamehubApi/images/Holloween_Background3.png",
		"https://raw.githubusercontent.com/BoomBoomMushroom/GameHub/main/GamehubApi/images/Holloween_Background4.png",
		"https://raw.githubusercontent.com/BoomBoomMushroom/GameHub/main/GamehubApi/images/Holloween_Background5.png",
		"https://raw.githubusercontent.com/BoomBoomMushroom/GameHub/main/GamehubApi/images/Holloween_Background6.png",
		"https://raw.githubusercontent.com/BoomBoomMushroom/GameHub/main/GamehubApi/images/Holloween_Background7.png",
		"https://raw.githubusercontent.com/BoomBoomMushroom/GameHub/main/GamehubApi/images/Holloween_Background8.png"]
var day = getDay()

function loadBackground(){
	if(getMonth()=="Febuary" && 10 <= day && day <=18){
		//e = valentineSet
		document.getElementById("logo").href = "./GamehubApi/logos/ValentineGamesHubLogo.png"
		document.getElementById("headerLogo").src = "./GamehubApi/logos/ValentineGamesHubLogo.png"
	}
	if(getMonth()=="October"){
		e = spookySet
		document.getElementById("logo").href = "./GamehubApi/logos/HalloweenGamesHubLogo.png"
		document.getElementById("headerLogo").src = "./GamehubApi/logos/HalloweenGamesHubLogo.png"
	}
	if(getMonth()=="November" && 22 <= day && day <=28){
		//e = thanksgivingSet
		document.getElementById("logo").href = "./GamehubApi/logos/ThanksgivingGamesHubLogo.png"
		document.getElementById("headerLogo").src = "./GamehubApi/logos/ThanksgivingGamesHubLogo.png"
	}
	if(getMonth()=="December"){
		//e = christmasSet
		document.getElementById("logo").href = "./GamehubApi/logos/ChristmasGamesHubLogo.png"
		document.getElementById("headerLogo").src = "./GamehubApi/logos/ChristmasGamesHubLogo.png"
	}
	var rand = Math.floor( Math.random() * (backgrounds.length-0) )+0
	if(backgrounds[rand]=="https://raw.githubusercontent.com/BoomBoomMushroom/GameHub/main/GamehubApi/images/GH_Background2.png"){
		document.getElementById("links").style.color = "black"
	}
	document.body.style.backgroundImage="url('"+backgrounds[rand]+"')"
}
loadBackground()
