import express from "express"
import socket from 'socket.io'
import http from 'http'
import cors from 'cors'
import router from './router'
import socketProcess from './socket'
import install from "./install"


const app = express();
const port = process.env.PORT || 3500
const corsOptions = {
    origin: [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",
    ],
    credenials: true,
    methods: ["GET", "POST", "PUT"]
}
const io = socket(server, {
    cors: corsOptions
})
const server = http.createServer(app);

app.use(cors(corsOptions));
app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ limit: '500mb', extended: true }));
app.use('/api', router) // 주소


install((res) => {
    server.listen(port, () => {
        console.log(`Api server Open! Port :${port}`)
        socketProcess(io)
    })
})