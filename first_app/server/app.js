import express from 'express'
import { Server } from 'socket.io';
import { createServer } from 'http'
import cors from 'cors'

const PORT = 3000;
const app = express();
const server = createServer(app);       // http server
const io = new Server(server,{          // adding cors for websocket, we can also add for http apis like before
    cors:{
        origin: "*",
        methods: ["GET","POST"],
        credentials: true,
    }
})


// socker.io can only work with a http server not directly with express
// thats why we bind a socker server with a http server that is bind with express to simplify routing



// routes need to be set first before app.listen is executed 
app.get('/', (req, res) => {
    res.send('Hello World!');
});


// initial socket connect
io.on('connection',(socket)=>{
    console.log(`User/socket connected with id : ${socket.id}`);
    socket.emit('welcome',"Welcome to the Server")
})



// start the app
server.listen(PORT, ()=>{
    console.log(`server started on port : ${PORT}`)
})
