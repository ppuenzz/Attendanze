// เอฟเฟกต์เวลากดปุ่ม (เด้งเบาๆ)
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    button.style.transform = "scale(0.95)";
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 150);
  });
});

// ไปหน้า Clock In/Out (ถ้ายังไม่มีไฟล์จะขึ้น alert)
function goToClock() {
  alert("Clock In/Out page is under construction.");
  // ถ้ามี clock.html แล้วให้ใช้ด้านล่างแทน
  // window.location.href = "clock.html";
}

// ไปหน้า Admin
function goToAdmin() {
  window.location.href = "admin.html";
}

// (option) กลับหน้าแรกจาก admin
function goHome() {
  window.location.href = "index.html";
}
