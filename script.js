document.addEventListener('DOMContentLoaded', () => {
    const chatbotToggle = document.getElementById('chatbot-toggle'); // Chatbot toggle icon
    const chatbotNotification = document.getElementById('chatbot-notification'); // Notification text
    const chatbot = document.getElementById('chatbot'); // Chatbot container
    const closeChatbotButton = document.getElementById('close-chatbot'); // Close button
    const userInput = document.getElementById('user-input'); // Input field
    const sendButton = document.getElementById('send-button'); // Send button
    const messagesDiv = document.getElementById('chatbot-messages'); // Message container

    // Knowledge Base with Multiple Keywords for a Single Response
    const botReplies = [
        {
            keywords: ["name", "who are you", "introduce yourself", "your name"],
            response: "My name is Nithiyanandham R, and I am a Data & AI Engineer."
        },
        {
            keywords: ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening"],
            response: "Hello! How can I assist you today? 😊"
        },
        {
            keywords: ["how are you", "how is it going", "how's everything"],
            response: "I'm just a virtual assistant, but I'm always here to help you! How can I assist you today?"
        },
        {
            keywords: ["bye", "goodbye", "see you", "take care"],
            response: "Goodbye! Feel free to come back anytime if you have more questions. Have a great day!"
        },
        {
            keywords: ["professional summary", "summary", "about you"],
            response: "Proactive and results-driven Data & AI Engineer with 1+ year of experience delivering real-time POCs and client-ready AI solutions."
        },
        {
            keywords: ["education", "college", "degree", "academic"],
            response: "I graduated from Mahendra Engineering College with a BE in Computer Science, achieving a CGPA of 7.06."
        },
        {
            keywords: ["skills", "technical skills", "expertise", "proficiencies"],
            response: "My technical skills include Python, R, TensorFlow, Hugging Face, IBM Watson Assistant, IBM Watson Discovery, and more."
        },
        {
            keywords: ["work experience", "experience", "job", "career"],
            response: "I worked as a Team Lead at SBA Info Solutions and as an AI Intern at Imagecon India Pvt."
        },
        {
            keywords: ["projects", "key projects", "notable work"],
            response: `Here are some of my notable projects:
                - Document Processing Automation: Reduced processing time by 40% using IBM Datacap.
                - Generative AI Chatbots: Improved customer experience with IBM Watson Assistant.
                - OCR Solutions: Enhanced data entry efficiency by 30%.
                - Video Streaming Platform: Improved content discovery by 50%.`
        },
        {
            keywords: ["certifications", "achievements", "credentials"],
            response: `Here are my certifications:
                - IBM Watson Assistant Badge
                - IBM Discovery Badge
                - IBM Watsonx.ai Badge
                - MLOps Foundations Badge
                - Artificial Intelligence using Python`
        },
        {
            keywords: ["contact", "email", "phone", "reach out"],
            response: "You can contact me at ananthananth881@gmail.com or +91 9629618273."
        },
        {
            keywords: ["linkedin", "social media", "profile"],
            response: "You can find me on LinkedIn at linkedin.com/in/nithiyanandham-r-23094092."
        },
        {
            keywords: ["github", "source code", "projects link"],
            response: "My GitHub profile is github.com/nithiyananandham12."
        },
        {
            keywords: ["tools", "ibm tools", "software"],
            response: "I use IBM Watson Assistant, Watson Discovery, Tableau, PostgreSQL, and Hugging Face for my projects."
        },
        {
            keywords: ["default"],
            response: "I'm sorry, I couldn't find relevant information. Could you try rephrasing?"
        }
    ];

    // Toggle Chatbot Visibility
    chatbotToggle.addEventListener('click', () => {
        chatbot.classList.toggle('hidden'); // Show or hide chatbot
        chatbotNotification.classList.add('hidden'); // Hide notification when chatbot is clicked
    });

    // Close Chatbot
    closeChatbotButton.addEventListener('click', () => {
        chatbot.classList.add('hidden'); // Hide chatbot
    });

    // Add Message to Chat
    function addMessage(message, isUser = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = isUser ? 'user-message' : 'bot-message';
        messageDiv.textContent = message;
        messagesDiv.appendChild(messageDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the latest message
    }

    // Handle User Input
    function handleUserInput() {
        const userMessage = userInput.value.trim().toLowerCase();
        if (!userMessage) return;

        addMessage(userMessage, true); // Add user's message
        userInput.value = ''; // Clear input field

        // Find matching response
        let botReply = botReplies.find(entry =>
            entry.keywords.some(keyword => userMessage.includes(keyword))
        );

        botReply = botReply ? botReply.response : botReplies.find(entry => entry.keywords.includes("default")).response;

        setTimeout(() => addMessage(botReply, false), 500); // Add bot's message after delay
    }

    // Event Listeners
    sendButton.addEventListener('click', handleUserInput);
    userInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') handleUserInput();
    });
});
