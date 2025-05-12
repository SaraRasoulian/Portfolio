document.addEventListener("DOMContentLoaded", () => {
  const cursorContainer = document.getElementById("cursorContainer");
  const customCursor = document.getElementById("customCursor");

  const positionElement = (e) => {
    const mouseY = e.clientY - 14;
    const mouseX = e.clientX - 18;
    customCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  };

  // Get initial mouse position to set the initial position of the cursor
  const initialMouseX = window.innerWidth / 2;
  const initialMouseY = window.innerHeight / 2;
  customCursor.style.transform = `translate3d(${initialMouseX}px, ${initialMouseY}px, 0)`;

  window.addEventListener("mousemove", positionElement);
});
