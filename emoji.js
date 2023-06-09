const emojiButton = document.getElementById('emoji-button');
const emojiInput = document.getElementById('emoji-input');
const emojiContainer = document.getElementById('emoji-container');

// Configuración de EmojiMart
const picker = new EmojiMart.EmojiPicker({
  sheetSize: 32,
  set: 'apple',
  emojiTooltip: true,
  onSelect: (emoji) => {
    emojiInput.value = emoji.native;
    picker.hidePicker();
  }
});

emojiButton.addEventListener('click', () => {
  picker.togglePicker(emojiButton);
});

const chatForm = document.getElementById('chat-form');
const nameInput = document.getElementById('name-input');
const messageInput = document.getElementById('message-input');
const chatMessages = document.querySelector('.chat-messages');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameInput.value;
  const message = messageInput.value + ' ' + emojiInput.value;
  
  // Crea un nuevo elemento de mensaje
  const messageElement = document.createElement('p');
  messageElement.innerHTML = `<strong>${name}:</strong> ${message}`;
  chatMessages.appendChild(messageElement);

  // Limpia los campos de entrada
  messageInput.value = '';
  emojiInput.value = '';
});

