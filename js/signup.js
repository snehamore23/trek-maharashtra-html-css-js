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





function togglePassword(id, icon) {

    let input = document.getElementById(id);

    if (input.type === "password") {
        input.type = "text";
        icon.src = "../images/hide.png";
    }
    else {
        input.type = "password";
        icon.src = "../images/view.png";
    }

}




function registerUser() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let error = document.getElementById("errorMsg");
    let success = document.getElementById("successMsg");

    error.innerText = "";
    success.style.display = "none";

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        error.innerText = "Please fill all information";
        return;
    }

    if (password !== confirmPassword) {
        error.innerText = "Password and Confirm Password must be same";
        return;
    }

    success.style.display = "block";

}