// Sample skills array
const skills = ["HTML", "CSS", "JavaScript", "Git", "Responsive Design"];

// Display skills
const skillsList = document.getElementById("skillsList");
skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

// Handle contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value || "Not selected";
  const message = document.getElementById("message").value;

  const summary = `
    <h3>Submission Summary:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
  document.getElementById("formSummary").innerHTML = summary;

  this.reset(); // Optional: Clear form after submission
});

// Toggle dark mode
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
