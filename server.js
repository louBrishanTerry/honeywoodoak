//---- Setup http server, express and socket.io

console.log("running great!");

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const io = require('socket.io').listen(server);
server.listen(port);

app.use(express.static('public'));  
console.log(`Listening for socket connections on port ${port}`);

//---- Real time stuff with socket.io

io.on('connection', (socket) => {
  console.log("New client: " + socket.id);
  
  socket.on('LDR', function(data) {
    console.log('LDR = ', data);
    io.emit('LDR/', data);
   });
  
  socket.on('red', function(data) {
    console.log('Red = ', data);
    io.emit('Red/', data);
   });
  
  socket.on('gre', function(data) {
    console.log('Green = ', data);
    io.emit('Gre/', data);
   });
  
  socket.on('blu', function(data) {
    console.log('Blue = ', data);
    io.emit('Blu/', data);
   });
  
  socket.on('fun', function(data) {
    console.log('Fungi = ', data);
    io.emit('Fun/', data);
   });
  
  socket.on('disconnect', function() {
        console.log("Client has disconnected: " + socket.id);
      });
});