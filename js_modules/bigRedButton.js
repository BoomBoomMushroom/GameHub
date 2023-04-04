function randomInt(min,max){
    return Math.floor(Math.random() * (max-min+1))+min
}

document.getElementById("bigRedButton").addEventListener("click",(e)=>{
var button = document.getElementById("bigRedButton")
button.style.top = randomInt(0,window.innerHeight-button.offsetHeight)+"px"
button.style.left = randomInt(0,window.innerWidth-button.offsetWidth)+"px"
var cl = parseInt( getCookie("clicks") )
if(isNaN(cl)){
    cl = 0
}
setCookie("clicks",(cl+1).toString(),999)
button.innerText = (cl+1).toString()
})

document.getElementById("bigRedButton").addEventListener("click", function(e){
    document.getElementById("bigRedButtonUnselect").style.display = "block"
    document.getElementById("bigRedButtonUnselect").select()
    document.getElementById("bigRedButtonUnselect").style.display = "none"
    fetch("https://Gameshub-API.boomboommushroom.repl.co/registerButtonClicks?token="+getCookie("accToken")+"&amount="+getCookie("clicks"))
    .then(d=>{
        console.log(d)
    })
})