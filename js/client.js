const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")

const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}


const name = prompt("Enter Your Name to join Chat");
socket.emit('new-user-joined', name);

socket.on('user-joined', data=>{
   append(`${name} joined the chat`, 'right')
})

