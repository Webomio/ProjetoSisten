function consultarCPF() {
            var cpf = document.getElementById('cpf').value;

            const mensagem = `Consulte com a administração
            t.me/player7770
            Mande esse TXT:
            CPF: ${cpf}
            Key: (COLOQUE_SUA_KEY)`;

            
            addMessageToChat(mensagem);
        }

        function addMessageToChat(message) {
            var chatContainer = document.getElementById('chat-container');
            var chatMessage = document.createElement('div');
            chatMessage.classList.add('chat-message');
            chatMessage.textContent = message;
            chatContainer.appendChild(chatMessage);
        }