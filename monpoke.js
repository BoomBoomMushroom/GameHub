var bTrans1 = document.getElementById("bTrans1")
var bTrans2 = document.getElementById("bTrans2")

var routeNumber = -1;
var possibleEntitys = [kyoger, groudon, raquaza, shinx, luxio, jirachi, tauros, deoxysN, deoxysA, deoxysD, deoxysS]
var entityPoke = null;

var shinyChance = 8192;
var megaChance = 5000;

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
    if (randomNum(1, shinyChance/*8192*/) === 1) {
      pokemon.shiny = true
    } else {
      pokemon.shiny = false
    }
    if(randomNum(1, megaChance /*5000*/) === 1){
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

function loadPokemonPics(){
	autoLoad();
  if(poke1 != null){
  	if(poke1.mega){
    	document.getElementByClassName('poke1img').src = poke1.primalSprite
    }
    else if(poke1.shiny){
    	document.getElementByClassName('poke1img').src = poke1.shinySprite
    }
    else if(poke1.shiny && poke1.mega){
    	document.getElementByClassName('poke1img').src = poke1.sinyPrimalSprite
    }
  }
}

function catchMon(){
	var d = new Date();
  var e = d.getMonth()+1+"/"+d.getDate()+"/"+d.getFullYear()
  
  var win = window.open()
  win.document.write("Caught by "+name+", on "+e+"<img src='"+document.getElementById("enemyEntity").src+"'>")
  
  if (poke1 == null){
  	saveData("poke1", entityPoke)
    autoLoad()
  }
  else if (poke2 == null){
  	saveData("poke2", entityPoke)
    autoLoad()
  }
  else if (poke3 == null){
  	saveData("poke3", entityPoke)
    autoLoad()
  }
  else if (poke5 == null){
  	saveData("poke4", entityPoke)
    autoLoad()
  }
  else if (poke5 == null){
  	saveData("poke5", entityPoke)
    autoLoad()
  }
  else if (poke6 == null){
  	saveData("poke6", entityPoke)
    autoLoad()
  }
  
  loadPokemonPics();
  
  /*
  document.getElementById("name").innerHTML = "Caught by "+name+", on "+e
  
  document.getElementById("monGot").src = document.getElementById("enemyEntity").src
  
  battleGrounds.style.display = 'none'
  */
}
function possibleEntitysUpdate() {
  if (routeNumber === -1) {
    possibleEntitys = [kyoger, groudon, raquaza, shinx, luxio, jirachi, tauros, deoxysN, deoxysA, deoxysD, deoxysS]
  }
}
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
function firstStartLoad() {

	poke1 = null
  poke2 = null
  poke3 = null
  poke4 = null
  poke5 = null
  poke6 = null

  titleArea.style.display = 'block'
  gameSpace.style.display = 'none'
  battleGrounds.style.display = 'none'
  possibleEntitysUpdate()
  autoLoad()
}
function sha256(ascii) {
	function rightRotate(value, amount) {
		return (value>>>amount) | (value<<(32 - amount));
	};
	
	var mathPow = Math.pow;
	var maxWord = mathPow(2, 32);
	var lengthProperty = 'length'
	var i, j; // Used as a counter across the whole file
	var result = ''

	var words = [];
	var asciiBitLength = ascii[lengthProperty]*8;
	
	//* caching results is optional - remove/add slash from front of this line to toggle
	// Initial hash value: first 32 bits of the fractional parts of the square roots of the first 8 primes
	// (we actually calculate the first 64, but extra values are just ignored)
	var hash = sha256.h = sha256.h || [];
	// Round constants: first 32 bits of the fractional parts of the cube roots of the first 64 primes
	var k = sha256.k = sha256.k || [];
	var primeCounter = k[lengthProperty];
	/*/
	var hash = [], k = [];
	var primeCounter = 0;
	//*/

	var isComposite = {};
	for (var candidate = 2; primeCounter < 64; candidate++) {
		if (!isComposite[candidate]) {
			for (i = 0; i < 313; i += candidate) {
				isComposite[i] = candidate;
			}
			hash[primeCounter] = (mathPow(candidate, .5)*maxWord)|0;
			k[primeCounter++] = (mathPow(candidate, 1/3)*maxWord)|0;
		}
	}
	
	ascii += '\x80' // Append Ƈ' bit (plus zero padding)
	while (ascii[lengthProperty]%64 - 56) ascii += '\x00' // More zero padding
	for (i = 0; i < ascii[lengthProperty]; i++) {
		j = ascii.charCodeAt(i);
		if (j>>8) return; // ASCII check: only accept characters in range 0-255
		words[i>>2] |= j << ((3 - i)%4)*8;
	}
	words[words[lengthProperty]] = ((asciiBitLength/maxWord)|0);
	words[words[lengthProperty]] = (asciiBitLength)
	
	// process each chunk
	for (j = 0; j < words[lengthProperty];) {
		var w = words.slice(j, j += 16); // The message is expanded into 64 words as part of the iteration
		var oldHash = hash;
		// This is now the undefinedworking hash", often labelled as variables a...g
		// (we have to truncate as well, otherwise extra entries at the end accumulate
		hash = hash.slice(0, 8);
		
		for (i = 0; i < 64; i++) {
			var i2 = i + j;
			// Expand the message into 64 words
			// Used below if 
			var w15 = w[i - 15], w2 = w[i - 2];

			// Iterate
			var a = hash[0], e = hash[4];
			var temp1 = hash[7]
				+ (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) // S1
				+ ((e&hash[5])^((~e)&hash[6])) // ch
				+ k[i]
				// Expand the message schedule if needed
				+ (w[i] = (i < 16) ? w[i] : (
						w[i - 16]
						+ (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15>>>3)) // s0
						+ w[i - 7]
						+ (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2>>>10)) // s1
					)|0
				);
			// This is only used once, so *could* be moved below, but it only saves 4 bytes and makes things unreadble
			var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) // S0
				+ ((a&hash[1])^(a&hash[2])^(hash[1]&hash[2])); // maj
			
			hash = [(temp1 + temp2)|0].concat(hash); // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
			hash[4] = (hash[4] + temp1)|0;
		}
		
		for (i = 0; i < 8; i++) {
			hash[i] = (hash[i] + oldHash[i])|0;
		}
	}
	
	for (i = 0; i < 8; i++) {
		for (j = 3; j + 1; j--) {
			var b = (hash[i]>>(j*8))&255;
			result += ((b < 16) ? 0 : '') + b.toString(16);
		}
	}
	return result;
};
function adminLogin(){
	var inputUsername = window.prompt("Enter username: ")
  var inputPassword = window.prompt("Enter password: ")
  
  var hashedUsername = sha256(inputUsername);
  var hashedPassword = sha256(inputPassword);
  
  var user = 'e98ae3a385900e101b403c3b87a8f291fdf5d17c1ec55612154ac2b25da228bd';
  var pass = 'f61374852ca5c60c54d4a501c4bb051bb3f83aafe42aa58ff1f325fa3ad71e66';
  
  var user2 = '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'
  var pass2 = '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'
  
  if (hashedUsername === user && hashedPassword === pass || hashedUsername === user2 && hashedPassword === pass2)
  {
  	openPanel()
  }
}

function updateShinyValue(){
	var ssv = document.getElementById("setShinyValue")
	shinyChance = parseInt(ssv.value)
}
function openPanel(){
	var panel = document.getElementById("adminPanel")
  panel.style.display = 'block'
}
function closePanel(){
	var panel = document.getElementById("adminPanel")
  panel.style.display = 'none'
}
