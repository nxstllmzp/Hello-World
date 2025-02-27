document.querySelector(".confirm-btn").addEventListener("click", function() {
    let selectedService = document.getElementById("service").value;
    let confirmCheck = document.getElementById("confirm").checked;

    if (!confirmCheck) {
        Swal.fire({
            title: "กรุณายืนยันข้อมูล",
            text: "คุณต้องติ๊กที่ 'ยืนยันข้อมูลการจอง' ก่อน",
            icon: "warning"
        });
        return;
    }

    if (selectedService === "A") {
        Swal.fire({
            title: "ช่าง JAMS",
            text: "กรุณารอสักครู่...",
            icon: "success",
            timer: 2000,
            showConfirmButton: false
        }).then(() => {
            window.location.href = "/payments/hairsalon.html";
        });
    } else if (selectedService === "B") {
        Swal.fire({
            title: "ช่าง PAM",
            text: "กรุณารอสักครู่...",
            icon: "success",
            timer: 2000,
            showConfirmButton: false
        }).then(() => {
            window.location.href = "/payments/hairsalon.html";
        });
    } else if (selectedService == "C") {
        Swal.fire({
            title: "ช่าง POND",
            text: "กรุณารอสักครู่...",
            icon: "success",
            timer: 2000,
            showConfirmbutton: false
        }).then(() =>{
            window.location.href = "/payments/hairsalon.html";
        });
    } else if (selectedService == "D") {
            Swal.fire({
                title: "ช่าง SARA",
                text: "กรุณารอสักครู่...",
                icon: "success",
                timer: 2000,
                showConfirmbutton: false

            }).then(() =>{
                window.location.href = "/payments/hairsalon.html";
            });
    }else {
        Swal.fire({
            title: "กรุณาเลือกช่าง!",
            text: "คุณต้องเลือกช่างก่อนยืนยันการจอง",
            icon: "warning"
        });
    }
    
});
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
    window.location.href = "/login ans register/home.html"; // เปลี่ยนหน้า
});