var bTrans1 = document.getElementById("bTrans1")
var bTrans2 = document.getElementById("bTrans2")

var routeNumber = -1;
var possibleEntitys = [kyoger, groudon, raquaza]
var entityPoke = null;

var poke1 = null
var poke2 = null
var poke3 = null
var poke4 = null
var poke5 = null
var poke6 = null
myStorage = window.localStorage;

var name = "UNDEFINED"

const titleArea = document.getElementById("titleArea")
const battleGrounds = document.getElementById("battlegrounds")
const gameSpace = document.getElementById("gameSpace")

function play() {
  titleArea.style.display = 'none'
  gameSpace.style.display = 'block'
  
  name = document.getElementById("nameInput").value
  document.getElementById("nameInput").style.display = "none"
  autoSave()
}

function encounterEntity() {
	autoSave()
  function shinyCalculate(pokemon) {
    if (randomNum(1, 100/*8192*/) === 1) {
      pokemon.shiny = true
    } else {
      pokemon.shiny = false
    }
    if(randomNum(1, 100 /*5000*/) === 1){
    	pokemon.mega = true
    }
    else{
    	pokemon.mega = false
    }
  }
  function loadEntity(pokemon) {
    var enemyEntitySpawn = document.getElementById("enemyEntity")
    if (pokemon.shiny == true) {
    
    	if(pokemon.mega == true){
      	enemyEntitySpawn.src = pokemon.shinyPrimalSprite
      }
      else{
      	enemyEntitySpawn.src = pokemon.shinySprite
      
      }
      
    } 
    else if(pokemon.shiny == false) {
    	if(pokemon.mega == false){
      	enemyEntitySpawn.src = pokemon.sprite
      }
      else{
      	enemyEntitySpawn.src = pokemon.primalSprite
      }
    }
  }
  function anim() {
    bTrans1.classList.add("animate1");
    bTrans2.classList.add("animate2");
    setTimeout(function() {
      bTrans1.classList.remove("animate1");
      bTrans2.classList.remove("animate2");
    }, 1000)
  }
  function generateRandomPoke() {
    return possibleEntitys[randomNum(0, possibleEntitys.length)]
  }
  function checkPoke(pokemon) {
    while (entityPoke === undefined || entityPoke === null) {
      entityPoke = generateRandomPoke()
    }
  }
	function rest(){
  	shinyCalculate(entityPoke)
  	loadEntity(entityPoke)
    dispayEnemyData(entityPoke)
    gameSpace.style.display = "none"
    battleGrounds.style.display = "block"
  }
	function dispayEnemyData(pokemon){
  
  	var enemyDataLabel = document.getElementById("enemyData")
    var bar1 = document.getElementById("bar1")
    var bar2 = document.getElementById("bar2")
    
    bar2.style.width = calculateBar(entityPoke)
    
    if (pokemon.health <= 0){}
    else if (pokemon.health > 0 && pokemon.shiny === true){
    	enemyDataLabel.innerHTML = pokemon.name+" - "+pokemon.health+"/"+pokemon.maxHealth+" - Level "+pokemon.level+" - SHINY!"
    }
    else{
    	enemyDataLabel.innerHTML = pokemon.name+" - "+pokemon.health+"/"+pokemon.maxHealth+" - Level "+pokemon.level
    }
    
  }
	function calculateBar(pokemon){
  	return (pokemon.health/pokemon.maxHealth)*100
  }
  
  anim()
  possibleEntitysUpdate()
  entityPoke = generateRandomPoke()
  checkPoke(entityPoke)
  setTimeout(rest, 1000)
}

firstStartLoad();

function autoSave(){
	saveData('name', name)
	saveData('poke1', poke1)
  saveData('poke2', poke2)
  saveData('poke3', poke3)
  saveData('poke4', poke4)
  saveData('poke5', poke5)
  saveData('poke6', poke6)
}
function autoLoad(){
	name = loadData('name')
	poke1 = loadData('poke1')
  poke2 = loadData('poke2')
  poke3 = loadData('poke3')
  poke4 = loadData('poke4')
  poke5 = loadData('poke5')
  poke6 = loadData('poke6')
}
function saveData(key, value){
	myStorage.setItem(key, value);
}
function loadData(key){
	let Data = myStorage.getItem(key)
  return Data
}
function clearBitData(key){
	myStorage.setItem(key, null)
}
function clearAllData(){
	myStorage.clear()
}

function catchMon(){
	var d = new Date();
  var e = d.getMonth()+"/"+d.getDate()+"/"+d.getFullYear()
  
  document.getElementById("name").innerHTML = "Caught by "+name+", on "+e
}
function possibleEntitysUpdate() {
  if (routeNumber === -1) {
    possibleEntitys = [kyoger, groudon, raquaza]
  }
}
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
function firstStartLoad() {
  titleArea.style.display = 'block'
  gameSpace.style.display = 'none'
  battleGrounds.style.display = 'none'
  possibleEntitysUpdate()
  autoLoad()
}
