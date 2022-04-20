const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
});

const rooms = new Map();

app.get('/rooms', (req, res) => {
  return res.json(rooms);
});

io.on('connection', (socket) => {
  debugger;
  console.log('socket connected: ', socket.id);
});

const PORT = process.env.PORT || 3005;
server.listen(PORT, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log(`server started on ${PORT} port`);
});
