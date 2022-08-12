function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
	if (parts.length===2) return parts.pop().split(';').shift();
}

document.onkeypress = function (e) {
  e = e || window.event
  window.previousKeyEpoch = Math.ceil(Date.now()/1000)
}

function httpFetchText(url,callback,onError){
	fetch(url)
  .then(response=>response.text())
  .then(data=>callback(data))
  .catch(error=>onError(error))
}

var i = setInterval(()=>{
	var currentEpoch = Math.ceil(Date.now()/1000)
  if(currentEpoch - window.previousKeyEpoch <= 1000*60*2){
  	var token = "0hlaR5U6dzSyRfU1"//getCookie("accToken")
    if(token == undefined) return
  	var coinUrl = "https://gameshub-api.academyofcode1.repl.co/awardmoney?token="+token+"&amount=10"
    httpFetchText(coinUrl,(data)=>{
    	console.log(data)
    })
  }
},1000*60)
