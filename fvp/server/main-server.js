const http = require('http');
const WebSocketServer = require('websocket').server;

const server = http.createServer();
server.listen(9898);

const wsServer = new WebSocketServer({
  httpServer: server
});

wsServer.on('request', function(request) {
  const connection = request.accept(null, request.origin);

  connection.on('message', function(message) {
      var msg = message.utf8Data
      console.log('Reecived Message: '+msg);
  });
  connection.on('close', function(reasonCode,description) {
    console.log('Client has disconnected.');
  })
});
