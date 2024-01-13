function consultarBIN() {
            var bin = document.getElementById('bin').value;

            document.getElementById('chat-container').innerHTML = '';

            var myHeaders = new Headers();
            myHeaders.append("apikey", "yq2aIVx3AiCKPxAWZrFWZj8yMAaq6O0n");
            var requestOptions = {
                method: 'GET',
                headers: myHeaders
            };

            fetch(`https://api.apilayer.com/bincheck/${bin}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    // Formata a resposta como mensagem de chat
                    const mensagem = `
✅ Consulta Realizada

Detalhes da BIN:
Nome do Banco: ${result.bank_name || 'N/A'}
Country: ${result.country || 'N/A'}
Tipo: ${result.type || 'N/A'}
Bandeira: ${result.scheme || 'N/A'}
Bin: ${result.bin || 'N/A'}
`;

                    // Exibe a resposta formatada como mensagem de chat
                    addMessageToChat(mensagem);
                })
                .catch(error => {
                    // Exibe mensagem de erro
                    addMessageToChat('Ocorreu um erro na consulta da BIN.');
                });
        }

        function addMessageToChat(message) {
            var chatContainer = document.getElementById('chat-container');
            var chatMessage = document.createElement('div');
            chatMessage.classList.add('chat-message');
            chatMessage.innerHTML = message;
            chatContainer.appendChild(chatMessage);

            // Adiciona botÃ£o de cÃ³pia
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