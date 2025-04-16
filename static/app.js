const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage(userMessage, 'user');
  input.value = '';

  setTimeout(() => {
    const botResponse = generateBotResponse(userMessage);
    appendMessage(botResponse, 'bot');
  }, 800);
});

function appendMessage(message, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.textContent = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotResponse(msg) {
  msg = msg.toLowerCase();
  if (msg.includes('hola')) return '¡Hola! ¿En qué puedo ayudarte hoy?';
  if (msg.includes('precio')) return 'Nuestros precios dependen del producto. ¿Qué deseas saber exactamente?';
  if (msg.includes('gracias')) return '¡De nada! ¿Necesitas algo más?';
  return 'Lo siento, no entendí tu mensaje. ¿Podrías repetirlo de otra forma?';
}
