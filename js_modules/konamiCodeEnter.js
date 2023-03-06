const konamiCode = "up up down down left right left right b a".split(" ")
const keycodes = {
    "a": 65,
    "b": 66,
    "up": 38,
    "down": 40,
    "left": 37,
    "right": 39,
}
var codeIndex = 0
document.addEventListener("keydown",(event)=>{
    const keyCode = event.keyCode
    var reqKeycode = keycodes[konamiCode[codeIndex]]
    if(codeIndex>=konamiCode.length-1){
        alert("Konami entered! Loading data...")
        fetch('https://Gameshub-API.academyofcode1.repl.co/awardAdvancement?token='+getCookie("accToken")+"&id=3",{})
        .then(response => response.text())
        .then(data=>{
            window.location.href = "./Piracy/pirate"
        })
    }
    if(keyCode==reqKeycode){
    codeIndex += 1
    } else{
    codeIndex = 0
    }
})