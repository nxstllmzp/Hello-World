// ดึง modal และปุ่มต่างๆ
const modal = document.getElementById("logoutModal");
const closeModal = document.querySelector(".modal-close");
const cancelBtn = document.querySelector(".btn-cancel");
const confirmBtn = document.querySelector(".btn-confirm");

// ฟังก์ชันเปิด modal
function confirmlogout() {
    modal.style.display = "flex";
}

// ฟังก์ชันปิด modal
function closeLogoutModal() {
    modal.style.display = "none";
}

// กดปิด modal
closeModal.addEventListener("click", closeLogoutModal);
cancelBtn.addEventListener("click", closeLogoutModal);

// กด "ใช่" เพื่อออกจากระบบ
confirmBtn.addEventListener("click", function () {
    window.location.href = "/user/profile.html"; // เปลี่ยนหน้า
});
