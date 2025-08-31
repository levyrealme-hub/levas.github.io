// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('userInput');

    // Add event listener for the 'Enter' key
    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default action (form submission)
            sendMessage();
        }
    });
});

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatWindow = document.getElementById('chat-window');
    const userText = userInput.value.trim();

    if (userText === "") {
        return; // Don't send empty messages
    }

    // 1. Create and display the user's message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user-message';
    userMessageDiv.textContent = userText;
    chatWindow.appendChild(userMessageDiv);

    // 2. Clear the input field
    userInput.value = '';

    // 3. Show a "thinking" indicator
    const thinkingIndicator = document.createElement('div');
    thinkingIndicator.className = 'message ai-message thinking-indicator';
    thinkingIndicator.textContent = 'Pensando...';
    chatWindow.appendChild(thinkingIndicator);

    // 4. Scroll to the bottom to show the new message and indicator
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // 5. Simulate AI response after a delay
    setTimeout(() => {
        // Remove the thinking indicator
        thinkingIndicator.remove();

        // Create and display the AI's message
        const aiMessageDiv = document.createElement('div');
        aiMessageDiv.className = 'message ai-message';
        aiMessageDiv.textContent = `Esta é uma resposta simulada da IA para: "${userText}"`;
        chatWindow.appendChild(aiMessageDiv);

        // Scroll to the bottom again to show the AI message
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 1500 + Math.random() * 500); // Simulate a realistic delay
}
