
(function(){

var canvas = document.getElementById('game');
	  		var ctx = canvas.getContext('2d');

	  		canvas.width = 400;
	  		canvas.height = 320;
	  		ctx.fillStyle = 'red';
	  		var ballx = Math.floor(Math.random()*300);
	  		var bally = Math.floor(Math.random()*500);
	  		var ballz = Math.floor(Math.random()*100);
	  		ctx.beginPath();
	  		ctx.arc(ballx,bally,ballz,0,Math.PI*2,true);
	  		ctx.fill();

})();
	  		


