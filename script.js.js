document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("contactBtn");
  const contactInfo = document.getElementById("contactInfo");

  button.addEventListener("click", function () {
    contactInfo.textContent = "Email: example@email.com | Phone: 9876543210";
  });
});
