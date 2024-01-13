 function consultarCNPJ() {
            var cnpj = document.getElementById('cnpj').value;

            document.getElementById('chat-container').innerHTML = '';

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        const responseData = JSON.parse(xhttp.responseText);

                        
                        const mensagem = `
✅ Consulta Realizada                       

NOME FANTASIA: ${responseData["NOME FANTASIA"]}
RAZAO SOCIAL: ${responseData["RAZAO SOCIAL"]}
CNPJ: ${responseData.CNPJ}
SETOR: ${responseData.SETOR}
PRINCIPAL DESCRICAO: ${responseData["CNAE PRINCIPAL DESCRICAO"]}
CEP: ${responseData.CEP}
DATA ABERTURA: ${responseData["DATA ABERTURA"]}
DDD: ${responseData.DDD}
TELEFONE: ${responseData.TELEFONE}
EMAIL: ${responseData.EMAIL}
TIPO LOGRADOURO: ${responseData["TIPO LOGRADOURO"]}
LOGRADOURO: ${responseData.LOGRADOURO}
NUMERO: ${responseData.NUMERO}
COMPLEMENTO: ${responseData.COMPLEMENTO}
BAIRRO: ${responseData.BAIRRO}
MUNICIPIO: ${responseData.MUNICIPIO}
`;

                        
                        addMessageToChat(mensagem);
                    } else {
                       
                        addMessageToChat('Insira um CNPJ vÃ¡lido.');
                    }
                }
            };

            const cnpjApiUrl = 'https://api-publica.speedio.com.br/buscarcnpj?cnpj=' + cnpj;

            xhttp.open("GET", cnpjApiUrl, true);
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
            alert('Mensagem copiada para a area de transferencia.');
        }