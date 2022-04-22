const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
});

app.use(express.json());
 
const rooms = new Map();

app.get('/rooms', (req, res) => {
  return res.json(rooms);
});
app.post('/rooms', (req, res) => { 
  const {roomId, userName} = (req.body);
  if (!rooms.has(roomId)) {
    rooms.set(
      roomId, 
      new Map([
        ['users', new Map()],
        ['messages', []],
      ]));
  }
  // res.json([...rooms.keys()]);
  res.send();
});

io.on('connection', (socket) => {
  
  socket.on('ROOM:JOIN', ({roomId}) => {
    socket.join(data.roomId);
    rooms.get(roomId).get('users').socket(socket.id, userName)
    const users = rooms.get(roomId).get('users').values();
    socket.to(roomId).broadcast.emit('ROOM:JOINED', users);
    

  })



  console.log('socket connected: ', socket.id);
});

const PORT = process.env.PORT || 3005;
server.listen(PORT, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log(`server started on ${PORT} port`);
});
