// Node Server which will hanlde socket io connection

// sudo npm install nodemon -g
// npm install socket.io
// npm init
 const io = require('socket.io')(8000,{
   cors:{
     origin: "*"
   }
 })
 // add kia cors ka code our aik error solve kia jo aloow ka eerrro araha
// const io = require("socket.io")(8000,{
//   cors:{
//     origin: "*"
//   }
// })

const users = {};

io.on('connection', socket=>{ // socket.io instance hay jo k buhhut sarey io connection ko listen kaega
    socket.on('new-user-joined', name=>{ // jo be aik particular connection k saath hoga hona chahye wo socket.io handle karega
      console.log("new user", name);
      users[socket.id] = name;   // jobe new join karega ye usko append kerdega ocket.id m
      socket.broadcast.emit('user-joined', name); //jis ne jin kia usko chor k baqi sab k emit kerdega k is ne join kia hay chat
    })
    socket.on('send', message=>{
        socket.broadcast.emit('receive', {message: message, name: user[socket.id]})
      });
})
