var singleplayerGames = [
    {name:"Snake", url: "./games/snake"},
    {name:"Pet the Dog!", url: "https://pet-the-dog.netlify.app/"},
    {name:"Solar System Simulator", url: "./games/solarsystemsimulator"},
    {name:"Custom Programming Language Creator", url: "https://custom-programming-language-creator.netlify.app/"},
    {name:"Monpoke", url: "./games/monpoke"},
    {name:"Page Counter", url: "./games/pagecounter"},
    {name:"You v.s Snake AI", url: "./games/snakeaibattle"},
    {name:"Snake Based Ecosystem", url: "./games/snakeecosystem"},
    {name:"The Apple Collection", url: "./games/applecollection"},
    {name:"Pixel Art Maker", url: "./games/pixelartmaker"},
    {name:"Snake AI 2", url: "./games/snake_ai-v2"},
    {name:"Conway's Game of Life", url: "./games/conways_game_of_life"},
    {name:"Slaying Sowballs", url: "./FiledGames/slayingsnowballs/"},
    {name:"Worlde Copy Old", url: "./games/wordle"},
    {name:"Worlde Copy", url: "./games/wordlenew"},
    {name:"Wordle Solver", url: "./games/wordlesolver"},
    {name:"Getting Over It", url: "./games/getting_over_it"},
    {name:"Money Miner", url: "./games/money_miner"},
    {name:"Dirt Collecting Simulator", url: "./FiledGames/dirtcollectingsimulator"},
    {name:"Artificial Life w/ Settings", url: "./games/life"},
    {name:"Talking Ben", url: "./FiledGames/ben"},
    {name:"Rota", url: "./games/rota"},
]
var multiplayerGames = [
    {name:"Existance Simulator", url: "./games/existancesimulator"},
    {name:"Existance Simulator 3D", url: "./FiledGames/games/existancesimulator3d/"},
    {name:"Sprouts (In Person Req)", url: "./games/sproutssolo"},
    {name:"Battle Royale", url: "./games/battleroyale"},
    {name:"Cards Against Humanity", url: "./games/CardsAgainstHumanity"},
]
var server = [
    {name:"Login / Signup", url: "./gamehubapi/signup"},
    {name:"Account Settings", url: "./gamehubapi/accsettings"},
    {name:"Search Accounts", url: "./gamehubapi/accsearch"},
    {name:"Gameshub Shop", url: "./gamehubapi/shop"},
    {name:"Leaderboards", url: "./gamehubapi/leaderboard"},
]
var unblocked = [
    {name:"Holy Unblocker", url: "https://school-api-k5mb.onrender.com/"}
]
var gambling = [
    {name:"Blackjack", url: "./games/blackjack"},
    {name:"Slot Machines", url: "./games/slotMachines"},
    {name:"Rooulette", url: "./games/rooulette"},
]

function insertAfter(newNode, existingNode) {
      existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }

if(singleplayerGames.length==0){document.getElementById("single").style.display = "none"}
if(multiplayerGames.length==0){document.getElementById("multi").style.display = "none"}
if(server.length==0){document.getElementById("server").style.display = "none"}
if(unblocked.length==0){document.getElementById("unblocked").style.display = "none"}

for(var x=0;x<singleplayerGames.length;x++){
  var t = "<a href="+singleplayerGames[x].url+">"+singleplayerGames[x].name+"</a>"
  document.getElementById("single").innerHTML += t
}
for(var x=0;x<multiplayerGames.length;x++){
   var t = "<a href="+multiplayerGames[x].url+">"+multiplayerGames[x].name+"</a>"
  document.getElementById("multi").innerHTML += t
}
for(var x=0;x<server.length;x++){
   var t = "<a href="+server[x].url+">"+server[x].name+"</a>"
  document.getElementById("server").innerHTML += t
}
for(var x=0;x<unblocked.length;x++){
   var t = "<a href="+unblocked[x].url+">"+unblocked[x].name+"</a>"
  document.getElementById("unblocked").innerHTML += t
}
for(var x=0;x<gambling.length;x++){
   var t = "<a href="+gambling[x].url+">"+gambling[x].name+"</a>"
  document.getElementById("gambling").innerHTML += t
}
