document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const signinForm = document.getElementById("signinForm");

    if (signupForm) {
        signupForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmpassword").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            try {
                const response = await fetch("http://localhost:5000/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                });

                const data = await response.json();
                if (response.ok) {
                    alert("Signup successful! Please sign in.");
                    window.location.href = "signin.html"; // Redirect to signin
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error("Error signing up:", error);
            }
        });
    }

    if (signinForm) {
        signinForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            try {
                const response = await fetch("http://localhost:5000/signin", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                });

                const data = await response.json();
                if (response.ok) {
                    localStorage.setItem("token", data.token);
                    alert("Signin successful! Redirecting to home page.");
                    window.location.href = "index.html"; // Redirect to home
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error("Error signing in:", error);
            }
        });
    }
});
