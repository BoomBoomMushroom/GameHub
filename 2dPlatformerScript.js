const player = document.getElementById("player");
const itemPart1 = document.getElementById("item1")
const itemPart2 = document.getElementById("item2")

let health = 20;
let hunger = 20;

/* Item1 Settings Origin */
let item1_border = "5px"
let item1_height = "10px"
let item1_width = "25px"
let item1_background_color = "#218ed1"
let item1_position = "relative"
let item1_top = "10px"
let item1_left = "35px"
/* Item2 Settings Origin*/
let item2_border = "5px"
let item2_height = "10px"
let item2_width = "13px"
let item2_background_color = "#6e3703"
let item2_position = "relative"
let item2_top = "20px"
let item2_left = "25px"


let ItemEquipped = false;
let HotbarActive = 1

setInterval(callEverySec(), 100)

function callEverySec(){
	if(ItemEquipped === true){itemPart1.style.visibility = "visible"; itemPart2.style.visibility = "visible"}
  else if(ItemEquipped === false){itemPart1.style.visibility = "hidden"; itemPart2.style.visibility = "hidden"}
  updateHotbar()
}

function move(dir){

	if(parseInt(document.getElementById("player").style.left) <= 370 && dir === "right"){
  	document.getElementById("player").style.left = parseInt(document.getElementById("player").style.left) + 5 + "px";
  }
  
  else if(parseInt(document.getElementById("player").style.left) > 0 && dir === "left"){
  	document.getElementById("player").style.left = parseInt(document.getElementById("player").style.left) - 5 + "px";
  }  
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 68 || event.keyCode == 39) {
        move("right");
        itemPart1.style.left="25px"
        itemPart2.style.left="35px"
        document.getElementById("eyes").style.left="15px"
    }
    else if(event.keyCode == 65 || event.keyCode == 37) {
        move("left");
        itemPart1.style.left="-13px"
        itemPart2.style.left="-35px"
        document.getElementById("eyes").style.left="3px"
    }
    else if(event.keyCode == 32 || event.keyCode == 38 || event.keyCode == 87){
    	jump();
    }
    
    else if(event.keyCode == 69){
    	if (HotbarActive === 10){HotbarActive = 1}
      else{HotbarActive = HotbarActive + 1}
      updateHotbar()
    }
    
    else if(event.keyCode == 81){
    	if (HotbarActive === 1){HotbarActive = 10}
      else{HotbarActive = HotbarActive - 1}
      updateHotbar()
    }
    
    else if(event.keyCode == 82){
    	if (ItemEquipped === true){ItemEquipped = false; callEverySec()}
      else if (ItemEquipped === false){ItemEquipped = true; callEverySec()}
    }
});

function updateHotbar(){
	if(HotbarActive === 1){
		document.getElementById("hotbarItem1").style.backgroundColor = "#3FBD0D"
    document.getElementById("hotbarItem10").style.backgroundColor = "#75615D"
    document.getElementById("hotbarItem2").style.backgroundColor = "#75615D"
  }
  if(HotbarActive === 2){
		document.getElementById("hotbarItem2").style.backgroundColor = "#3FBD0D"
    document.getElementById("hotbarItem1").style.backgroundColor = "#75615D"
    document.getElementById("hotbarItem3").style.backgroundColor = "#75615D"
  }
  if(HotbarActive === 3){
		document.getElementById("hotbarItem3").style.backgroundColor = "#3FBD0D"
    document.getElementById("hotbarItem4").style.backgroundColor = "#75615D"
    document.getElementById("hotbarItem2").style.backgroundColor = "#75615D"
  }
  if(HotbarActive === 4){
		document.getElementById("hotbarItem4").style.backgroundColor = "#3FBD0D"
    document.getElementById("hotbarItem5").style.backgroundColor = "#75615D"
    document.getElementById("hotbarItem3").style.backgroundColor = "#75615D"
  }
  if(HotbarActive === 5){
		document.getElementById("hotbarItem5").style.backgroundColor = "#3FBD0D"
    document.getElementById("hotbarItem6").style.backgroundColor = "#75615D"
    document.getElementById("hotbarItem4").style.backgroundColor = "#75615D"
  }
  if(HotbarActive === 6){
		document.getElementById("hotbarItem6").style.backgroundColor = "#3FBD0D"
    document.getElementById("hotbarItem7").style.backgroundColor = "#75615D"
    document.getElementById("hotbarItem5").style.backgroundColor = "#75615D"
  }
  if(HotbarActive === 7){
		document.getElementById("hotbarItem7").style.backgroundColor = "#3FBD0D"
    document.getElementById("hotbarItem8").style.backgroundColor = "#75615D"
    document.getElementById("hotbarItem6").style.backgroundColor = "#75615D"
  }
  if(HotbarActive === 8){
		document.getElementById("hotbarItem8").style.backgroundColor = "#3FBD0D"
    document.getElementById("hotbarItem9").style.backgroundColor = "#75615D"
    document.getElementById("hotbarItem7").style.backgroundColor = "#75615D"
  }
  if(HotbarActive === 9){
		document.getElementById("hotbarItem9").style.backgroundColor = "#3FBD0D"
    document.getElementById("hotbarItem10").style.backgroundColor = "#75615D"
    document.getElementById("hotbarItem8").style.backgroundColor = "#75615D"
  }
  if(HotbarActive === 10){
		document.getElementById("hotbarItem10").style.backgroundColor = "#3FBD0D"
    document.getElementById("hotbarItem1").style.backgroundColor = "#75615D"
    document.getElementById("hotbarItem9").style.backgroundColor = "#75615D"
  }
  
}

function attack(){
	if(ItemEquipped === true){
  	jump();
    player.style.backgroundColor = "#FF0000"
    setTimeout(() => {player.style.backgroundColor = "#f5b540"}, 500)
  }
  else if (ItemEquipped === false){jump()}
}

function jump(){
	if(player.classList.contains("animate") === false){
		player.classList.add("animate");
  	setTimeout(function(){player.classList.remove("animate")}, 500)
  }
}

function randomChestLoot(){

	var DiamondSword = {
  	"Name":"Diamond Sword",
    "maxDurability":300,
    "currentDurability":300
  }
  
}
