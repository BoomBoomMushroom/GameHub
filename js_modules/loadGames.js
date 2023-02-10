var singleplayerGames = [
    {name:"Snake", url: "https://gameshub.dev/games/snake"},
    {name:"Pet the Dog!", url: "https://pet-the-dog.netlify.app/"},
    {name:"Solar System Simulator", url: "https://gameshub.dev/games/solarsystemsimulator"},
    {name:"Custom Programming Language Creator", url: "https://custom-programming-language-creator.netlify.app/"},
    {name:"Monpoke", url: "https://gameshub.dev/games/monpoke"},
    {name:"Page Counter", url: "https://gameshub.dev/games/pagecounter"},
    {name:"You v.s Snake AI", url: "https://gameshub.dev/games/snakeaibattle"},
    {name:"Snake Based Ecosystem", url: "https://gameshub.dev/games/snakeecosystem"},
    {name:"The Apple Collection", url: "https://gameshub.dev/games/applecollection"},
    {name:"Pixel Art Maker", url: "https://gameshub.dev/games/pixelartmaker"},
    {name:"Snake AI 2", url: "https://gameshub.dev/games/snake_ai-v2"},
    {name:"Conway's Game of Life", url: "https://gameshub.dev/games/conways_game_of_life"},
    {name:"Slaying Sowballs", url: "https://gameshub.dev/FiledGames/slayingsnowballs/"},
    {name:"Worlde Copy Old", url: "https://gameshub.dev/games/wordle"},
    {name:"Worlde Copy", url: "https://gameshub.dev/games/wordlenew"},
    {name:"Wordle Solver", url: "https://gameshub.dev/games/wordlesolver"},
    {name:"Getting Over It", url: "https://gameshub.dev/games/getting_over_it"},
    {name:"Money Miner", url: "https://gameshub.dev/games/money_miner"},
    {name:"Dirt Collecting Simulator", url: "https://gameshub.dev/FiledGames/dirtcollectingsimulator"},
    {name:"Artificial Life w/ Settings", url: "https://gameshub.dev/games/life"},
    {name:"Talking Ben", url: "https://gameshub.dev/FiledGames/ben"},
    {name:"Rota", url: "https://gameshub.dev/games/rota"},
]
var multiplayerGames = [
    {name:"Existance Simulator", url: "https://gameshub.dev/games/existancesimulator"},
    {name:"Existance Simulator 3D", url: "https://gameshub.dev/FiledGames/games/existancesimulator3d/"},
    {name:"Sprouts (In Person Req)", url: "https://gameshub.dev/games/sproutssolo"},
    {name:"Battle Royale", url: "https://gameshub.dev/games/battleroyale"},
]
var server = [
    {name:"Signup", url: "https://gameshub.dev/gamehubapi/signup"},
    {name:"Log in", url: "https://gameshub.dev/gamehubapi/signin"},
    {name:"Account Settings", url: "https://gameshub.dev/gamehubapi/accsettings"},
    {name:"Search Accounts", url: "https://gameshub.dev/gamehubapi/accsearch"},
    {name:"Gameshub Shop", url: "https://gameshub.dev/gamehubapi/shop"},
    {name:"Leaderboards", url: "https://gameshub.dev/gamehubapi/leaderboard"},
]
var unblocked = [
    {name:"Holy Unblocker", url: "https://Holy-Unblocker.boomboommushroom.repl.co/"},
    {name:"Tabby Cat", url: "https://tabbycat-unblocked.netlify.app/public/"},
    {name:"Boxel Rebound", url: "https://boxel-rebound-unblocked-2.netlify.app/www/"},
]
var gambling = [
    {name:"Blackjack", url: "https://gameshub.dev/games/blackjack"},
    {name:"Slot Machines", url: "https://gameshub.dev/games/slotMachines"},
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
