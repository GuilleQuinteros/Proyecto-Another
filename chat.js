// Obtener referencias a los elementos del chat
const chatForm = document.getElementById('chat-form');
const nameInput = document.getElementById('name-input');
const messageInput = document.getElementById('message-input');
const chatMessages = document.getElementById('chat-messages');

// Evento submit del formulario de chat
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameInput.value;
  const message = messageInput.value;

  

  // Crear un nuevo elemento de mensaje
  const newMessage = document.createElement('p');
  newMessage.innerText = `${name}: ${message}`;

  // Agregar el mensaje al chat
  chatMessages.appendChild(newMessage);
// Generar un color aleatorio en formato hexadecimal
const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

// Crear un nuevo elemento de mensaje con el estilo de sombreado aleatorio
const messageElement = document.createElement('p');
messageElement.innerHTML = `<strong>${name}:</strong> ${message}`;
messageElement.style.backgroundColor = randomColor;
messageElement.style.boxShadow = `2px 2px 5px ${randomColor}`;
chatMessages.appendChild(messageElement);

// Limpiar los campos de entrada
messageInput.value = '';
});

