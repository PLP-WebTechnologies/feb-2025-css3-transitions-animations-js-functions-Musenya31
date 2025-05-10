// Storing and retrieving user preferences using localStorage
document.getElementById("saveBtn").addEventListener("click", function() {
    let username = document.getElementById("username").value;
    localStorage.setItem("userName", username);
    displayGreeting();
});

// Function to display stored user name with animation
function displayGreeting() {
    let storedName = localStorage.getItem("userName");
    if (storedName) {
        let greeting = document.getElementById("greeting");
        greeting.textContent = `Hello, ${storedName}! Welcome back.`;
        greeting.style.opacity = "1"; // Trigger fade-in animation
    }
}

// Check localStorage on page load
window.onload = displayGreeting;

