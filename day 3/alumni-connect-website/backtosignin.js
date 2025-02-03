document.addEventListener("DOMContentLoaded", function () {
    let backtosigninLink = document.getElementById("Backtosignin");
    backtosigninLink.addEventListener("click", function (event) {
        event.preventDefault(); 
        window.location.href = "signin.html";
    });
});