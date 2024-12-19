let warningCount = 0;
const maxWarnings = 4;
const submitBtn = document.getElementById('submitBtn');
const messageDiv = document.getElementById('message');

document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // Display the remaining warnings before incrementing
        const remainingWarnings = maxWarnings - warningCount - 1;

        if (warningCount >= maxWarnings) {
            alert('You have been warned too many times. The exam will now be submitted.');
            submitExam(); // Function to submit the exam
        } else {
            warningCount++;
            alert('You switched tabs. You will be warned ' + remainingWarnings + ' more times.');
        }
    }
});

function submitExam() {
    window.location.href='dummy.html'
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    let score = 0;

    // Check answers
    if (formData.get('q1') === 'Paris') score++;
    if (formData.get('q2') === 'Elon Musk') score++;

    // Show message
    
     
    // Disable the form after submission
    form.reset();
    submitBtn.disabled = true;
}

// Prevent form submission on button click
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    submitExam();
});



// // login form section
// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the form from submitting normally

//     // Get input values
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
//     const errorMessage = document.getElementById("error-message");

//     // Clear previous error message
//     errorMessage.textContent = "";

//     // Simple validation
//     if (username === "" || password === "") {
//         errorMessage.textContent = "Both fields are required.";
//         return;
//     }

//     // Example: Hardcoded username and password check
//     if (username === "admin" && password === "password123") {
//         alert("Login Successful!");
//         // Redirect to another page (example)
//         window.location.href = "dashboard.html"; // Replace with your page
//     } else {
//         errorMessage.textContent = "Invalid username or password.";
//     }
// });
