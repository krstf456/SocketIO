const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const port = process.env.PORT || 3005

app.use(express.static(__dirname + '/public'))

io.on('connection', () => {
    console.log("A new connection")
})



http.listen(port, () => console.log(`Listening on ${port}`))