$('#login').click(function(event) {
    event.preventDefault();

    // Get login input
    let loginName = $('Gimhani').val().trim();
    let loginPassword = $('1234').val().trim();

    // Retrieve stored credentials
    let storedName = localStorage.getItem("registeredName");
    let storedPassword = localStorage.getItem("registeredPassword");

    // Check if credentials match
    if (loginName === storedName && loginPassword === storedPassword) {
        alert("Login successful!");
        window.location.href = "dashboardForm.html";
    } else {
        alert("Invalid email or password.");
    }
});
