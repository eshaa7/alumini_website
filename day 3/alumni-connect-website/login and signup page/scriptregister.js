document.addEventListener("DOMContentLoaded", function () {
    const alreadyuser = document.getElementById("Signin");

    if (alreadyuser) {
        alreadyuser.addEventListener("click", function (event) { // Fixed the typo
            event.preventDefault();
            window.location.href = "signin.html"; 
        });
    }
});

