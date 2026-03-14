function toggleMenu() {

    let menu = document.getElementById("navMenu");
    let auth = document.querySelector(".auth-links-containar");

    menu.classList.toggle("active");
    auth.classList.toggle("active");
}



function togglePassword() {
    const password = document.getElementById("password");
    const toggle = document.getElementById("toggle");

    if (password.type === "password") {
        password.type = "text";
        toggle.src = "../images/hide.png";
    } else {
        password.type = "password";
        toggle.src = "../images/view.png";
    }
}

function loginUser() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill all information!");
        return;
    }

    /* Example username from email */
    let username = email.split("@")[0];

    /* Show username */
    document.getElementById("welcomeUser").innerText = "Welcome " + username + " 👋";

    /* hide login + welcome card */
    document.querySelector(".login-box").style.display = "none";
    document.querySelector(".welcome-card").style.display = "none";

    /* show profile */
    document.getElementById("profileSection").style.display = "block";

}

function logoutUser() {

    document.querySelector(".login-box").style.display = "block";
    document.querySelector(".welcome-card").style.display = "block";
    document.getElementById("profileSection").style.display = "none";

}