// Select button and message elements
const button = document.getElementById("clickBtn");
const message = document.getElementById("message");

// Add event listener
button.addEventListener("click", () => {
  message.textContent = "You clicked the button! 🎉";
  message.style.color = "purple";
});
