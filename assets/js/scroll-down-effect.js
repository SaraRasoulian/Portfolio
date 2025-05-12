document.addEventListener("DOMContentLoaded", () => {
  const scrollDownIcon = document.getElementById("scrollDownIcon");

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY >= 100) {
      scrollDownIcon.classList.add("fade-out");
    } else {
      scrollDownIcon.classList.remove("fade-out");
    }
  };

  window.addEventListener("scroll", handleScroll);
});
