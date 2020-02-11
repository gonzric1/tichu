const path = require("path");
const express = require('express')
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const publicPath = path.join(__dirname, "/../public");
const port = process.env.PORT || 3000;

const knex = require('./db/connection');

app.use(express.static(publicPath));

io.on('connection', function(socket){
  console.log('a user connected. User:', socket.id);
  socket.on('disconnect', ()=>console.log("A user has disconnected. User: ", socket.id))
});

http.listen(3000, function(){
  console.log(`listening on *:${port}`);
});