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
document.onkeydown = function(event){
	const keyCode = event.keyCode
	var reqKeycode = keycodes[konamiCode[codeIndex]]
	if(codeIndex>=konamiCode.length-1){window.location.href = "https://gameshub.dev/pirate"}
	if(keyCode==reqKeycode){
		codeIndex += 1
	} else{
		codeIndex = 0
	}
}
