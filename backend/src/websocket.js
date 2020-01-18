const socketio = require('socket.io')

exports.setupWebsocket = (server) => {
    // console.log('websocket rodando')
    
    const io = socketio(server)

    io.on('connection', socket => {
        console.log('olokinho bixo')
        console.log(socket.id)
        console.log(socket.handshake.query)
        console.log(socket.handshake.time)
        console.log('ta pegando fogo bixo')
    })
}