document.addEventListener("DOMContentLoaded", function () {
    // Select the Profile link by its ID
    let profileLink = document.getElementById("Profile");

    // Add click event listener
    profileLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default navigation

        // Redirect to Profile.html
        window.location.href = "alumni-connect-website/Profile.html";
    });
});