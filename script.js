function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function sendMessage(event) {
  event.preventDefault();
  alert("Thank you for reaching out 💜 We'll get back soon!");
  event.target.reset();
  return false;
}
