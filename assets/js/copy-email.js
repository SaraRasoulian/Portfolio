document.addEventListener("DOMContentLoaded", function () {
  const emailButton = document.getElementById("email-to-copy");
  const emailText = emailButton.querySelector(".social-title");
  const originalText = emailText.textContent;

  emailButton.addEventListener("click", function () {
    const email = emailButton.getAttribute("data-email");
    navigator.clipboard.writeText(email);

    emailText.textContent = "Copied!";

    setTimeout(() => {
      emailText.textContent = originalText;
    }, 1500);
  });
});
