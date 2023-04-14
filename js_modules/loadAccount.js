// Get Account
window.account = null;

fetch('https://Gameshub-API.boomboommushroom.repl.co/tokeninfo?token='+getCookie("accToken"),{})
.then(response => response.text())
.then(data => {
    d = JSON.parse(data)
    console.log(JSON.parse(data))
    window.account = JSON.parse(data)
    try{
        if (d["GameshubData"]["RedButtonClicks"] >= 666){
            backgrounds.push( "https://raw.githubusercontent.com/BoomBoomMushroom/GameHub/main/GamehubApi/images/666_Clicks.png" )
            if(Math.random() <= 1 / backgrounds.length){
            document.body.style.backgroundImage="url('"+"https://raw.githubusercontent.com/BoomBoomMushroom/GameHub/main/GamehubApi/images/666_Clicks.png"+"')"
            }
        }
  
        if(JSON.parse(data)["GameshubData"]["RedButtonClicks"]){
            setCookie("clicks",JSON.parse(data).GameshubData.RedButtonClicks.toString(),999)
        }
    }
    catch(e){console.log(e)}
    
    if(JSON.parse(data)=="COULDNT_FIND_TOKEN"){
        document.getElementById("currentAcc").href = "./gamehubapi/signup"
        document.getElementById("currentAcc").innerText = "You are currently not signed in"
        document.getElementById("logout").style.display = "none"
    }
    else{
        document.getElementById("currentAcc").href = "./gamehubapi/viewacc?q=" + JSON.parse(data).UUID
        //document.getElementById("currentAcc").href = "./gamehubapi/accSettings"
        document.getElementById("currentAcc").innerText = "Welcome back, " + JSON.parse(data).Username + "!"
        document.getElementById("tr1").style.display = "none"
        document.getElementById("tr2").style.display = "none"
    }
})
