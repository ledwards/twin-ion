
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer();
var io = require('socket.io').listen(app);


// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

// Socket events

io.sockets.on('connection', function(socket) {
  socket.broadcast.emit('systemMessage', { message: 'A player has joined the game.' });
  socket.emit('systemMessage', { message: 'Welcome to the game' });

  socket.on('elementMoved', function(data) {
    socket.broadcast.emit('systemMessage', { message: 'Opponent moved a card: ' + data.selector });
    socket.broadcast.emit('updateElementPosition', data.selector, data.position);
  });

  socket.on('elementAddedToStack', function(data){
    socket.broadcast.emit('addElementToStack', data);
  });
});

