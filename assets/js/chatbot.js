function initChatbot() {
    const chatbot = document.createElement('div');
    chatbot.className = 'glass-panel';
    Object.assign(chatbot.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '300px',
        height: '400px',
        zIndex: '1000',
        display: 'none', // Hidden initially
        flexDirection: 'column',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
    });

    chatbot.innerHTML = `
        <div style="background: var(--accent-primary); padding: 1rem; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: bold; color: white;">Studio AI</span>
            <button id="close-chat" style="background:none; border:none; color:white; cursor:pointer;">×</button>
        </div>
        <div id="chat-messages" style="flex: 1; padding: 1rem; overflow-y: auto;">
            <div style="background: rgba(255,255,255,0.1); padding: 0.5rem; border-radius: 0.5rem; margin-bottom: 0.5rem;">
                Hello! How can I help you regarding our studio or services?
            </div>
        </div>
        <div style="padding: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
            <div style="display: flex; gap: 0.5rem;">
                <input type="text" id="chat-input" placeholder="Type..." style="flex: 1; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); color: white; padding: 0.5rem; border-radius: 0.25rem;">
                <button id="send-btn" style="background: var(--accent-primary); border: none; color: white; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer;">→</button>
            </div>
        </div>
    `;

    document.body.appendChild(chatbot);

    // Toggle Button
    const toggleBtn = document.createElement('button');
    Object.assign(toggleBtn.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'var(--accent-primary)',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
        zIndex: '1000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 5px 15px rgba(99, 102, 241, 0.4)'
    });
    toggleBtn.innerHTML = '💬';
    toggleBtn.onclick = () => {
        chatbot.style.display = 'flex';
        toggleBtn.style.display = 'none';
    };
    document.body.appendChild(toggleBtn);

    // Close logic
    document.getElementById('close-chat').onclick = () => {
        chatbot.style.display = 'none';
        toggleBtn.style.display = 'flex';
    };

    // Chat Logic
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const messages = document.getElementById('chat-messages');

    const addMessage = (text, isUser = false) => {
        const msgDiv = document.createElement('div');
        msgDiv.textContent = text;
        msgDiv.style.background = isUser ? 'rgba(99, 102, 241, 0.3)' : 'rgba(255,255,255,0.1)';
        msgDiv.style.padding = '0.5rem';
        msgDiv.style.borderRadius = '0.5rem';
        msgDiv.style.marginBottom = '0.5rem';
        msgDiv.style.alignSelf = isUser ? 'flex-end' : 'flex-start';
        msgDiv.style.maxWidth = '80%';
        msgDiv.style.marginLeft = isUser ? 'auto' : '0';
        messages.appendChild(msgDiv);
        messages.scrollTop = messages.scrollHeight;
    };

    const handleSend = () => {
        const text = input.value.trim();
        if (!text) return;
        addMessage(text, true);
        input.value = '';

        // Simulate AI response
        setTimeout(() => {
            const responses = [
                "That's an interesting project!",
                "Our team specializes in that.",
                "Have you checked our Case Studies?",
                "I can schedule a call for you."
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse, false);
        }, 1000);
    };

    sendBtn.onclick = handleSend;
    input.onkeypress = (e) => { if (e.key === 'Enter') handleSend(); };
}
