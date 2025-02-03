document.addEventListener("DOMContentLoaded", function () {
    const signupButton = document.querySelector(".auth-button");

    signupButton.addEventListener("click", function (event) {
        event.preventDefault(); 
        window.location.href = "index.html"; 
    });
});
