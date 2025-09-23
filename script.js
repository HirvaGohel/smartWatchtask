// Contact form validation
document.getElementById("contact").addEventListener("submit", function (e) {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  if (!name.value || !email.value || !subject.value || !message.value) {
    alert("Please fill in all fields.");
    e.preventDefault();
  } else if (!email.value.includes("@")) {
    alert("Please enter a valid email address.");
    e.preventDefault();
  } else {
    alert("Message sent! We'll get back to you soon.");
  }
});
