var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(7002);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}




// var winston = require("winston");
var $ = require('jquery');

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
	
  	allSockets.forEach(function(socket){
  		socket.emit('news', { reading: value });
  	})



  });	
});











var allSockets = [];

io.sockets.on('connection', function (socket) {
  
  allSockets.push(socket);
  



});