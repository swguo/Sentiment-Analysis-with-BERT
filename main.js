
var gameModule = (function(){

	function start(){

		var canvas = document.getElementById('game'),
		 ballx = Math.floor(Math.random()*300),
		 bally = Math.floor(Math.random()*500),
		 ballz = Math.floor(Math.random()*100);
 		ctx = canvas.getContext('2d');

	  		canvas.width = 400;
	  		canvas.height = 320;
	  		ctx.fillStyle = 'red';
	  		
	  		ctx.beginPath();
	  		ctx.arc(ballx,bally,ballz,0,Math.PI*2,true);
	  		ctx.fill();
	  	}

	  	return{


	  		start: start
	  	}

})();

gameModule.start();

(function(){
var c=document.getElementById("frant");
var ctx=c.getContext("2d");
ctx.fillStyle = 'yellow';
ctx.font="30px Arial";
ctx.fillText("Hello World",10,50);
	  		
})();


