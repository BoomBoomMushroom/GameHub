var chart = new CanvasJS.Chart("chartContainer", {
      title:{
        text: "Snake Population"              
      },
      data: [
      {
        type: "line",
        dataPoints: [
          { y: 1 },
        ]
      }
      ]
  }
)
chart.render()

function addNew(){
	var cmd = 'chart.data[0].addTo("dataPoints",{y:10});'
  var lastIndex = chart.data[0].get("dataPoints").length - 1
  chart.data[0].addTo('dataPoints',{y:snakeArr.length})
}

//-  πππππππππππ SNAKE CONSTRUCTOR πππππππππππ

function Snake(snakeLength, snakeX, snakeY, direction, snakeColor, snakeName, food) {
	this.snakeLength = snakeLength;
	this.snakeX = snakeX;
	this.snakeY = snakeY;
	this.direction = direction;
	this.previousDir = [];
	this.previousPos = [];
	this.snakeColor = snakeColor;
	this.snakeName = snakeName;
  this.food = food
}

//-  πππππππππππ CANVAS ASSIGNMENT πππππππππππ

var c = document.getElementById("game");
var ctx = c.getContext("2d");

//-  πππππππππππ ENVIROMENT VARIABLE πππππππππππ

var fruitX;
var fruitY;
var eat = true;
var intervalArr = [];
var velocity = 5;
var fps = 15;
var gameOver;
var generation = 0;
var dayLength = 5000 // ms
var dayTime = 0 // ms
var build = 'Build 1.2.25'

//-  πππππππππππ AI STARTING VARIABLE πππππππππππ

var snakeArr = []

var ai = new Snake(
	1,
	c.offsetWidth / 2,
	c.offsetHeight / 2,
	"left",
	"#1d68a1",
	"ai",
  1,
);
snakeArr.push(ai)
//-  πππππππππππ CLEAR CANVAS πππππππππππ

function nextFrame() {
	ctx.clearRect(0, 0, c.offsetWidth, c.offsetHeight);
}

//-  πππππππππππ DRAW SNAKE πππππππππππ

function drawSnake(snake) {
	ctx.fillStyle = "#000000";
	paintPixel(snake.snakeX, snake.snakeY);

	snake.previousPos.unshift({ x: snake.snakeX, y: snake.snakeY });
	snake.previousDir.unshift(snake.direction);

	for (var i = 1; i < snake.snakeLength; i++) {
		if (snake.previousPos[i]) {
			paintPixel(
				snake.previousPos[i].x,
				snake.previousPos[i].y,
				snake.snakeColor
			);
		}
	}

	//-  πππππππππππ UPDATE SNAKE POSITION BY DIRECTION πππππππππππ

	switch (snake.direction) {
		case "left":
			snake.snakeX -= velocity;
			break;

		case "right":
			snake.snakeX += velocity;
			break;

		case "up":
			snake.snakeY -= velocity;
			break;

		case "down":
			snake.snakeY += velocity;
			break;
	}
}

//-  πππππππππππ DRAW FRUIT πππππππππππ

function drawFruit(spawnNew) {
	if(spawnNew){eat=true}
	if (eat) {
		fruitX = Math.floor(Math.random() * c.offsetWidth - 5 )+ 5;
		fruitY = Math.floor(Math.random() * c.offsetHeight - 5 )+ 5;
		eat = false;

		paintPixel(fruitX, fruitY, "#db0011");
	}
	paintPixel(fruitX, fruitY, "#db0011");
}

//-  πππππππππππ DETECT COLLIDE πππππππππππ

function detectCollide(snakeX, snakeY, x, y, radius) {
	var differentX = x - snakeX;
	var differentY = y - snakeY;
	if (differentX <= radius && differentX >= -radius) {
		if (differentY <= radius && differentY >= -radius) {
			return true;
			// snakeLength += 5 ;
			// eat = true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

//-  πππππππππππ PAINT PIXEL πππππππππππ

function paintPixel(x, y, color) {
	if (color) {
		ctx.fillStyle = color;
	} else {
		ctx.fillStyle = "#000000";
	}
	ctx.fillRect(x, y, 5, 5);
}

//-  πππππππππππ GAME LOSE CHECKING πππππππππππ

function gameLoseCheck(snake) {
	
}

//-  πππππππππππ GAME OVER BEHAVIOUR πππππππππππ

function stop(){

}

//-  πππππππππππ EAT CHECKING πππππππππππ

function eatCheck(snake) {
	if (detectCollide(snake.snakeX, snake.snakeY, fruitX, fruitY, 5)) {
		snake.food += 1;
		eat = true;
	}
}

//-  πππππππππππ CLICK EVENT HANDLER πππππππππππ

function applyKey(el, keyCode) {
	var e = jQuery.Event("keydown");
	e.keyCode = keyCode;
	el.click(function() {
		el.trigger(e);
	});
}

applyKey($("#left"), 37);
applyKey($("#up"), 38);
applyKey($("#right"), 39);
applyKey($("#down"), 40);

//-  πππππππππππ AI BEHAVIOUR πππππππππππ

function AiHandler(snake) {
	var possibleMove = [];
	var differentX = fruitX - snake.snakeX;
	var differentY = fruitY - snake.snakeY;

	if (differentX > 0 && snake.previousDir[0] !== "left") {
		possibleMove.push("right");
	} else if (snake.previousDir[0] !== "right") {
		possibleMove.push("left");
	}

	if (differentY > 0 && snake.previousDir[0] !== "up") {
		possibleMove.push("down");
	} else if (snake.previousDir[0] !== "down") {
		possibleMove.push("up");
	}

	possibleMove = possibleMoveFilter(snake, possibleMove);

	//- LAYER TWO = IF ALL POSSBLE MOVE TO FOOD IS NEGATED

	if (possibleMove.length == 0) {
		possibleMove.unshift("up");
		possibleMove.unshift("down");
		possibleMove.unshift("left");
		possibleMove.unshift("right");

		possibleMove = possibleMoveFilter(snake, possibleMove);
	}

	var random = Math.floor(Math.random() * possibleMove.length);
	snake.direction = possibleMove[random];
}

function possibleMoveFilter(snake, moveArr) {
	var currentX = snake.snakeX;
	var currentY = snake.snakeY;
	var newArr = [];

	moveArr.forEach(function(data) {
		var validation = 0;
		var count = 0;

		if (data == "left" && snake.direction !== "right") {
			if (currentX - velocity > 3) {
				for (var i = 0; i < snake.snakeLength; i++) {
					if (snake.previousPos[i]) {
						if (
							detectCollide(
								currentX - velocity,
								currentY,
								snake.previousPos[i].x,
								snake.previousPos[i].y,
								3
							)
						) {
							count++;
						}
					}
				}

				if (!count) {
					validation++;
				}
			}
		}

		if (data == "right" && snake.direction !== "left") {
			if (currentX + velocity < c.offsetWidth - 3) {
				for (var i = 0; i < snake.snakeLength; i++) {
					if (snake.previousPos[i]) {
						if (
							detectCollide(
								currentX + velocity,
								currentY,
								snake.previousPos[i].x,
								snake.previousPos[i].y,
								3
							)
						) {
							count++;
						}
					}
				}

				if (!count) {
					validation++;
				}
			}
		}

		if (data == "up" && snake.direction !== "down") {
			if (currentY - velocity > 3) {
				for (var i = 0; i < snake.snakeLength; i++) {
					if (snake.previousPos[i]) {
						if (
							detectCollide(
								currentX,
								currentY - velocity,
								snake.previousPos[i].x,
								snake.previousPos[i].y,
								3
							)
						) {
							count++;
						}
					}
				}

				if (!count) {
					validation++;
				}
			}
		}

		if (data == "down" && snake.direction !== "up") {
			if (currentY + velocity < c.offsetHeight - 3) {
				for (var i = 0; i < snake.snakeLength; i++) {
					if (snake.previousPos[i]) {
						if (
							detectCollide(
								currentX,
								currentY + velocity,
								snake.previousPos[i].x,
								snake.previousPos[i].y,
								3
							)
						) {
							count++;
						}
					}
				}

				if (!count) {
					validation++;
				}
			}
		}
		if (validation) {
			newArr.unshift(data);
		}
	});

	return newArr;
}

//-  πππππππππππ Create New Snake πππππππππππ
function addSnake(){
	var e = new Snake(
  1,
  c.offsetWidth / 2,
  c.offsetHeight / 2,
  "left",
  "#1d68a1",
  "ai",
  1
  )
  snakeArr.push(e)
}

//-  πππππππππππ Generate Integer πππππππππππ
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//-  πππππππππππ Repos Fruit πππππππππππ
function reposFruit(){
	drawFruit(true)
	setTimeout(reposFruit, 20000)
}

//-  πππππππππππ Update Stats πππππππππππ
function updateStats(){
	var dayEle = document.getElementById('gens')
  var snakesEle = document.getElementById('snakes')
  var buildEle = document.getElementById('build')
  
  dayEle.innerHTML = 'Day: '+dayTime
  snakesEle.innerHTML = 'Snakes: '+snakeArr.length
  buildEle.innerHTML = 'Build: '+build
}

//-  πππππππππππ Day Counter πππππππππππ
function dayCounter(){
  for(var x=0;x<snakeArr.length;x++){
  	snake = snakeArr[x]
    if(snake.food>0){
    	if(snake.food>1){snek();snek();}
    }
    snake.food = 0
  }
  addNew()
  dayTime+=1
  setTimeout(dayCounter, 10000)
}

//-  πππππππππππ MERGE EVERYTHING TOGETHER πππππππππππ
function run() {
	generation = 1
  reposFruit()
  dayCounter()
	intervalArr.push(
		setInterval(function() {
			nextFrame();
  		for(var o=0;o<snakeArr.length;o++){
      	AiHandler(snakeArr[o])
        drawSnake(snakeArr[o])
        drawFruit();
				eatCheck(snakeArr[o]);
        updateStats()
        o++
      }
      
		}, 1000 / fps)
	);
}

run();
reset();
function snek(){
	addSnake()
}
function reset() {

	if(!gameOver){}
  else{

    ai = new Snake(
      1,
      c.offsetWidth / 2,
      c.offsetHeight / 2,
      "left",
      "#1d68a1",
      "ai"
    );

    gameOver = false;
    run();
    generation+=1
  }
  
  setTimeout(reset, 50)
};
