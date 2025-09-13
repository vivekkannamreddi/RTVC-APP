import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";
import cors from "cors";
import mongoose from"mongoose";
import connectToSocket from "./controllers/socketManager.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

const port = 3000;
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

app.get("/",(req,res)=>{
    res.send("application running...");
})

// const start = async()=>{
//     await app.listen(port,(req,res)=>{
//         console.log(`server is listening at port ${port}...`);
//     })
// }

const start = async()=>{
    const connectDB = await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB connection established...")
    await server.listen(app.get(port),(req,res)=>{
        console.log(`server is listening at port ${port}...`);
    })
}

start();
