document.addEventListener("DOMContentLoaded", function () {
    const signupButton = document.querySelector(".auth-button");

    signupButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent any default form submission behavior

        // Redirect to signin page
        window.location.href = "signin.html"; // Change to your actual signin page URL
    });
});
