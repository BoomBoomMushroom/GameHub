const c = document.getElementById('game');
const ctx = c.getContext('2d');

const pixelSize = 5
let fps = 15

var level = -1
var worldIndex = -1
var worldName = 'Unknown Landmass'
const worlds = [null]

// Enemy constructor
function enemy(xPos,yPos,type,maxHealth,speed,attackDmg,attk1,attk2,attk3,attk4){
	this.x = xPos
  this.y = yPos
  this.type = type
  this.maxHealth = maxHealth
  this.speed = speed
  this.health = maxHealth
  this.attackDmg = attackDmg
  
  this.attk1 = attk1
  this.attk2 = attk2
  this.attk3 = attk3
  this.attk4 = attk4
}

var enemyArr = []

function nextFrame(){
	ctx.clearRect(0,0,c.offsetWidth,c.offsetHeight);
}
function paintPixel(x,y,color){
	if(color){
  	ctx.fillStyle = color
  } else{
  	ctx.fillStyle = '#000000'
  }
  ctx.fillRect(x,y,pixelSize,pixelSize)
}
function drawImage(img, x, y){
	ctx.drawImage(img, x, y)
}
function drawEnemy(enemy){
	drawImage(enemy.type.ele,enemy.x,enemy.y)
}

function normalizeObjects(entity){
	entity.x = Math.round(entity.x/pixelSize)*pixelSize
  entity.y = Math.round(entity.y/pixelSize)*pixelSize
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function run(){
	// start code
  window.setInterval(function(){
  	nextFrame();
		for(var x=0;x<enemyArr.length;x++){
    	var enemy = enemyArr[x]
      normalizeObjects(enemy)
      drawEnemy(enemy)
    }
  },1000/fps)
}
run()
