function httpFetchJSON(url,callback,onError){
	fetch(url)
  .then(response=>response.json())
  .then(data=>callback(data))
  .catch(error=>onError(error))
}
function httpFetchText(url,callback,onError){
	fetch(url)
  .then(response=>response.text())
  .then(data=>callback(data))
  .catch(error=>onError(error))
}

window.httpAddon = {
	httpFetchJson: httpFetchJSON,
	httpFetchText: httpFetchText,
}
