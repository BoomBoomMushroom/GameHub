var recentActions = []

	// Cookie Functions
	function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
		c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
		}
	}
	return "";
	}

	// Websocket
	window.onopen = sendReason()

	function sendReason() {
        var time = setInterval(() => {
            console.log("Trying reason")
            try {
                ws.send('REASON-Gameshub_Api')
                ws.send('username-undefined')
                
                upa()
                clearInterval(time)
            } catch (err) {
                console.log(err+"- rea")
            }
        }, 50)
	}

    function upa(){
        console.log("trying upa")
        try {
            sendMsg('gameshub-api.herokuapp.com;/tokeninfo?token=' + getCookie("token") + ';GET');
            console.log(getCookie("token"))
            recentActions.push("tokenInfoGet")
        } catch (err) {
            console.log(err+"-upa")
        }
    }

	function sendMsg(msg) {
		ws.send(msg)
	}