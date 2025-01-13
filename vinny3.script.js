function sendMessage() {
    let userMessage = document.getElementById('user-input').value;
    if (userMessage.trim() === "") return; // Prevent empty messages

    let chatBox = document.getElementById('chat-box');
    
    // Display user message
    let userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('chat-message', 'user-message');
    userMessageDiv.textContent = userMessage;
    chatBox.appendChild(userMessageDiv);
    
    // Clear the input field
    document.getElementById('user-input').value = '';

    // Bot response
    let botResponse = getBotResponse(userMessage);

    // Display bot message
    let botMessageDiv = document.createElement('div');
    botMessageDiv.classList.add('chat-message', 'bot-message');
    botMessageDiv.textContent = botResponse;
    chatBox.appendChild(botMessageDiv);

    // Scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    // Simple rule-based responses (you can expand this to integrate a machine learning model)
    const lowerCaseInput = input.toLowerCase();
    
    if (lowerCaseInput.includes("machine learning")) {
        return "Machine Learning is a field of AI that allows computers to learn from data and make decisions!";
    } else if (lowerCaseInput.includes("chatbot")) {
        return "I am a simple chatbot created to demonstrate machine learning capabilities!";
    } else if (lowerCaseInput.includes("hello")) {
        return "Hello! How can I assist you today?";
    } else {
        return "Sorry, I didn't understand that. Could you please ask something else?";
    }
}
