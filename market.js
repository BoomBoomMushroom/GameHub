var reset = false;

var money = 0;

var marketManipulatonLvl = 0;
var marketManipAddon = 10;
var mmLvlCost = 10


var moneyGoal = 20
var amountBought = 0;
var buyPrice = 0;


var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "dark2",
	title:{
		text: ""
	},
	data: [{        
		type: "line",
      	indexLabelFontSize: 16,
		dataPoints: [
			{y: 1}
		]
	}]
});

chart.render();

function addNew(){
	var cmd = 'chart.data[0].addTo("dataPoints", {y:10});'
  
  var lastIndex = chart.data[0].get("dataPoints").length - 1
  
  var minX = chart.data[0].get("dataPoints")[lastIndex].y - marketManipAddon
  var maxX = chart.data[0].get("dataPoints")[lastIndex].y + marketManipAddon
  
  var x = getRandomInt(minX, maxX)
  if (x<0){x=0}
  	var sec = setInterval(chart.data[0].addTo("dataPoints", {y:x, x:chart.data[0].get("dataPoints")[lastIndex].x+4}), 500)
}

function getRandomInt(max, min){
	return Math.floor(Math.random() * (max-min) + min);
}

function updateMoney(){
	document.getElementById("moneyCount").innerHTML = "Money: "+money
  moneyGoal = document.getElementById("myRange").value
}

function calleverySec(){
	var myVar;
	myVar = setTimeout(calleverySec, 25)
  
	addNew()
  updateMoney()
  //if((chart.data[0].get("dataPoints").length - 1) === 20){clearInterval(myVar)}
  if (money >= moneyGoal){clearInterval(myVar)}
  if (reset === true){clearInterval(myVar);}
}

function marketManipLvlUp(){
	if (money => mmLvlCost){marketManipulatonLvl=marketManipulatonLvl+1;marketManipAddon=marketManipAddon*1.5;money=money-mmLvlCost; mmLvlCost=mmLvlCost*1.5}
  
  else{console.log("Err: too little money!")}
}

function newMarket(){
	var defaultDataPoints = [{y:1,x:0}]
	chart.data[0].set("dataPoints", defaultDataPoints)
  reset=true
  calleverySec()
}

function buy(){
	if (amountBought < 1){
    buyPrice = chart.data[0].get("dataPoints")[chart.data[0].get("dataPoints").length-1].y;
    money = money-chart.data[0].get("dataPoints")[chart.data[0].get("dataPoints").length-1].y
    amountBought = 1
    updateMoney()
  }
}

function sell(){
	if(amountBought === 1){
    amountBought = 0
    money = money + chart.data[0].get("dataPoints")[chart.data[0].get("dataPoints").length-1].y 
    updateMoney()
  }
}

calleverySec()
