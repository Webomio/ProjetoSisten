const keysValidas = ['chave1', 'chave2', 'chave3'];

        function verificarKey() {
            const inputKey = document.getElementById('keyInput').value;
            const mensagemElement = document.getElementById('mensagem');

            if (keysValidas.includes(inputKey)) {
                mensagemElement.textContent = 'Key valida.';
                mensagemElement.style.color = 'green';
            } else {
                mensagemElement.textContent = 'Key invalida.';
                mensagemElement.style.color = 'red';
            }
        }
