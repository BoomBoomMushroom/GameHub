var bTrans1 = document.getElementById("bTrans1")
var bTrans2 = document.getElementById("bTrans2")

const titleArea = document.getElementById("titleArea")
const option = document.getElementById("options")
const gameSpace = document.getElementById("gameSpace")

function play(){
	titleArea.style.display = 'none'
  gameSpace.style.display = 'block'
}

function encounterEntity(){
	var entityEncountered = null;
  var routeNumber = 0;
  var possibleEntitys = ["Kyoger", "Pikachu"]
  
  function possEntitiesBasesOnRoute(){
  	
  }
	function anim(){
    bTrans1.classList.add("animate1");
    bTrans2.classList.add("animate2");
    setTimeout(function(){bTrans1.classList.remove("animate1");bTrans2.classList.remove("animate2");}, 1000)
  }
  function entityNum(num){
  	if (num == 1){entityEncountered = possibleEntitys[num]; return entityEncountered;}
  }
  function chooseEntity(){
  	var numEntitys = possibleEntitys.length
    var rndNum = randomNum(1,numEntitys)
    entityNum(rndNum)
  }
  chooseEntity()
  anim()
	setTimeout(console.log(entityEncountered), 1000)
}

firstStartLoad()

function randomNum(min, max){
	return Math.floor(Math.random() * (max-min + 1) ) + min
}
function firstStartLoad(){
	titleArea.style.display = 'block'
  gameSpace.style.display = 'none'
}
