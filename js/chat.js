const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document/getElementById('messageInp')
const messageContainer = document.getElementById(".container")

const name = prompt("Enter Your Name to join Chat");