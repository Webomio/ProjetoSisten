function redirectToBash() {
        
        localStorage.setItem("loggedIn", "true");

        
        window.location.href = "bash.html";
    }

    function checkLogin() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if ((username === "Userman" && password === "useracess") ||
            (username === "martisz07" && password === "usermartins")) {
            
            redirectToBash();
        } else {
            
            document.getElementById("error-message").style.display = "block";
        }
    }
