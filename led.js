var five = require("johnny-five"), board, led;
board = new five.Board();

board.on("ready", function() {
   
	led = new five.Led({
	       pin: 10
	      });

	led.on();
	led.off();

    this.wait( 3000, function() {
           led.on();
    });
});
