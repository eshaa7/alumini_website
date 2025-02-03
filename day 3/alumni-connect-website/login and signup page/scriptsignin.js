document.addEventListener("DOMContentLoaded", function () {
    const newUserLink = document.getElementById("newUser");

    if (newUserLink) {
        newUserLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "register.html"; 
        });
    }
});
