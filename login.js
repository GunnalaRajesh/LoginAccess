document.getElementById("login-button").addEventListener("click", function () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username === "Gunnala Rajesh" && password === "19211a0465") {
        window.location.href = "./GRajesh.html";
    } 
    else if(username === "Silvoj Rajesh" && password === "19211a05r6") {
        window.location.href = "./SRajesh.html";
    }
    else if(username === "Shiva Sai Krishna" && password === "19211a0295") {
        window.location.href = "./Shiva.html";
    }
    else if(username === "Hussam Ali" && password === "19211a0294") {
        window.location.href = "./Ali.html";
    }    
    else {
        document.getElementById("error-message").textContent = "Wrong username/password.";
    }
});
