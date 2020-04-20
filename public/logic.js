let socket = io()
let name  = ""

document.onload = () => {
    name = prompt("vad heter du?")
}

socket.on('message', (incoming) => {
    console.log(name)
    let list = document.getElementById('messages')
    let listItem = document.createElement('li')
    listItem.innerText = incoming.name + ':' + incoming.message
    list.appendChild(listItem)
    //console.log(msg, '2')
})

function sendMessage() {
    let input = document.getElementById("m")
    let message = input.value
    input.value = ""
    socket.emit('message', { name, message })
    
}