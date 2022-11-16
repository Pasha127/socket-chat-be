import express from 'express';
import listEndpoints from 'express-list-endpoints';
import mongoose from 'mongoose';
import {Server as SocketServer} from "socket.io";
import {createServer} from "http";
import {newConnectionHandler} from "./socket/index.js"

const port = process.env.PORT || 3001

expressServer = express();
httpServer = createServer(expressServer);
const io = new SocketServer(httpServer);

io.on("connection", newConnectionHandler);


mongoose.connect(process.env.MONGO_CONNECTION);

mongoose.connection.on("connected", ()=> 
httpServer.listen(
    port,()=>{
    console.table(listEndpoints(expressServer));
    console.log(`Server running on posrt ${port}`)
})
)