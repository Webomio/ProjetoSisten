 function consultarCEP() {
            var cep = document.getElementById('cep').value;

            document.getElementById('chat-container').innerHTML = '';

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        const responseData = JSON.parse(xhttp.responseText);

                       
                        const mensagem = `
✅ Consulta Realizada

Módolo: Cep 
Cep: ${responseData.cep}
Estado: ${responseData.state}
Cidade: ${responseData.city}
Bairro: ${responseData.neighborhood}
Rua: ${responseData.street}
`;

                        
                        addMessageToChat(mensagem);
                    } else {
                     
                        addMessageToChat('Insira um CEP valido.');
                    }
                }
            };

            const cepApiUrl = 'https://brasilapi.com.br/api/cep/v1/' + cep.replace(/\D/g, '');

            xhttp.open("GET", cepApiUrl, true);
            xhttp.send();
        }

        function addMessageToChat(message) {
            var chatContainer = document.getElementById('chat-container');
            var chatMessage = document.createElement('div');
            chatMessage.classList.add('chat-message');
            chatMessage.textContent = message;
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