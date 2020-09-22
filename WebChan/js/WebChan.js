
//---------------------------------TIMER--------------------------------
setInterval(printTime, 1000);
var t;

function starTimer() {
	var msg = document.getElementById("msgTimer").value;
	var tempo = document.getElementById("tempoTimer").value;
	
	var crono = new Timer(msg, tempo);
	t = setInterval(crono.timer, 1000, crono);
}

function stopTimer() {
	clearInterval(t);
}

//Objeto timer
function Timer(msg, intervalo){
	console.log("Timer obj criado");
	//Var
	this.msg = msg;
	this.intervalo = parseInt(intervalo, 10);
	this.lastTime = 0;
	this.cont = 0;
	
	console.log(this.lastTime);
	console.log(this.intervalo);
	
	//Func
	this.timer = function(crono) {
		console.log("Timer chamado");
		var date = new Date();
		var hora = date.getHours();
		
		if(crono.lastTime <= 0){
			crono.lastTime = hora;
			console.log("lastTime arrumado");
		}
		
		if(hora >= crono.lastTime+crono.intervalo) {
			console.log("Triger");
			crono.lastTime = hora;
			alert(msg);
		}
	}
}

function printTime(){
	var date = new Date();
	var hora = date.getHours();
	var minu = date.getMinutes();
	var secs = date.getSeconds();
	
	var element = document.getElementById("relogio");
	element.innerHTML = "HORA: "+hora+":"+minu+":"+secs;
}