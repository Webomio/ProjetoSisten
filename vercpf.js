function login() {
            const enteredKey = document.getElementById('keyInput').value;

            
            const validKeys = ["webisting", "martisz07"];

            
            if (validKeys.includes(enteredKey)) {
                
                window.location.href = 'consultacpf868bjakakajajaJJJJJDwkkkab.html';
            } else {
                
                alert('Key invalida. Tente novamente.');
            }
        }
