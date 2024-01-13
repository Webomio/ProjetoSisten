function consultarTelefone() {
            var telefone = document.getElementById('telefone').value;

            const mensagem = `Consulte com a administração
            t.me/player7770
            Mande esse TXT:
            Telefone: ${telefone}
            Key: (COLOQUE_SUA_KEY)`;

            addMessageToChat(mensagem);
        }

        function addMessageToChat(message) {
            var chatContainer = document.getElementById('chat-container');
            var chatMessage = document.createElement('div');
            chatMessage.classList.add('chat-message');
            chatMessage.innerHTML = message;
            chatContainer.appendChild(chatMessage);

          
            var copyButton = document.createElement('button');
            copyButton.classList.add('copy-button');
            copyButton.textContent = 'Copiar';
            copyButton.onclick = function () {
                copyToClipboard(message);
            };
            chatContainer.appendChild(copyButton);
        }

        function copyToClipboard(text) {
            var textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('Mensagem copiada na area de transferencia.');
        }