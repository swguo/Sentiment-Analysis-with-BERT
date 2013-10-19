
(function(){

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

})();
	  		


