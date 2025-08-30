function sendMessage() {
  const input = document.getElementById("userInput").value;
  const response = document.getElementById("response");
  response.textContent = "Resposta simulada da IA: " + input;
}
