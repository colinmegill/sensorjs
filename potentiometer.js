// var winston = require("winston");
var five = require("johnny-five"),
    board, potentiometer;

board = new five.Board();

board.on("ready", function() {

  // Create a new `potentiometer` hardware instance.
  potentiometer = new five.Sensor({
    pin: "A2",
    freq: 250
  });

  // Inject the `sensor` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    pot: potentiometer
  });

  
//    winston.add(winston.transports.File, { filename: 'potentiometer_readings.js' });


  // "read" get the current reading from the potentiometer
  potentiometer.on("read", function( err, value ) {
//   winston.log('info', this.normalized);

  });
});


// References
//
// http://arduino.cc/en/Tutorial/AnalogInput
