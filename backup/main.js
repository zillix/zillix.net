var $ = function (id) {
    return document.getElementById(id);
}

window.onload = function () {
  //  $("calculate").onclick = calculate_click;
  //  $("investment").focus();
}

function showPlay(id) {
	document.getElementById('play' + id).style['visibility'] = 'visible';
}

function hidePlay(id) {
	document.getElementById('play' + id).style['visibility'] = 'hidden';
}

function rollImage(img, type) {
		switch(type) {
			case "over":
				document.images[img].src = "images/PlayButtonOver.png";
				break;
			case "out":
				document.images[img].src = "images/PlayButton.png";
				break;
			case "down":
				switch(img){
					case "playEndeavor":
					window.location = "http://www.kongregate.com/games/zillix/endeavor";
					break;
					
					case "playHunt":
					window.location = "http://www.ludumdare.com/compo/ludum-dare-25/?action=preview&uid=2460";
					break;
					
					case "playLU":
					window.location = "http://www.ludumdare.com/compo/ludum-dare-24/?action=preview&uid=2460";
					break;
					
					case "playTerminus":
					window.location = "http://www.ludumdare.com/compo/ludum-dare-23/?action=preview&uid=2460";
					break;
					
					case "playSummit":
					window.location = "http://www.kongregate.com/games/Zillix/summit";
					break;
					
					case "playRundontstop":
					window.location = "http://www.kongregate.com/games/Zillix/run-dont-stop";
					break;
					
					case "playTerracoda":
					window.location = "http://www.ludumdare.com/compo/ludum-dare-19/?action=preview&uid=2460";
					break;
					
					case "playIllumynate":
					window.location = "http://www.ludumdare.com/compo/ludum-dare-18/?action=preview&uid=2460";
					break;
					
					case "playEpicreport":
					window.location = "http://www.ludumdare.com/compo/minild-24/?action=preview&uid=2460";
					break;
					
					case "playCameran":
					window.location = "http://www.zillix.net/CameranBeta.html";
					break;
					
					case "playRemnants":
					window.location = "Remnants.html";
					break;
					
					case "playStellaradventure":
					window.location = "StellarAdventure.html";
					break;
					
					case "playPig":
					window.location = "http://www.newgrounds.com/portal/view/569397";
					break;
					
					case "playAcquiescence":
					window.location = "http://www.ludumdare.com/compo/minild-27/?action=rate&uid=2460";
					break;
				}

				break;
		}
	}