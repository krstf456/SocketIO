const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const port = process.env.PORT || 3005

app.use(express.static(__dirname + '/public'))



io.on('connection', (socket) => {

    io.on('join room', (data) => {
        socket.join(1)
    })

    console.log("A new connection")// socket motsvavar en klient

    socket.on('message', (incoming) => {
        console.log(incoming)
        io.emit('message', incoming)//skicka till alla som e kopplade
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
})




http.listen(port, () => console.log(`Listening on ${port}`))