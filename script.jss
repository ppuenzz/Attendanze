document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    // Play sound
    document.getElementById('clickSound').play();

    // Animate button
    button.style.transform = "scale(0.95)";
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 150);
  });
});
