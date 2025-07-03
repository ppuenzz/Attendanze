
// เล่นเสียง + เอฟเฟกต์คลิก
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const sound = document.getElementById('clickSound');
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }

    button.style.transform = "scale(0.95)";
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 150);
  });
});

// ฟังก์ชันสำหรับปุ่มแต่ละหน้า
function goToClock() {
  alert("Clock In/Out page is under construction.");
  // window.location.href = "clock.html";
}

function goToAdmin() {
  setTimeout(() => {
    window.location.href = "admin.html";
  }, 200);
}

function goHome() {
  setTimeout(() => {
    window.location.href = "index.html";
  }, 200);
}

