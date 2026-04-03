// ===== Lấy dữ liệu từ localStorage khi vào trang =====
let user = JSON.parse(localStorage.getItem("currentUser"));

if (user) {

    document.getElementById("profileName").innerText = user.hoten;
    document.getElementById("profilePhone").innerText = user.sdt;
    document.getElementById("profileAddress").innerText = user.diachi;
    document.getElementById("profileGroup").innerText = user.taikhoan;

}




// ===== Lấy các phần tử =====
const editBtn = document.querySelector(".btn-edit");
const modal = document.getElementById("editModal");
const closeBtn = document.querySelector(".close-btn");
const cancelBtn = document.querySelector(".btn-cancel");
const form = document.getElementById("editForm");


// ===== Mở cửa sổ chỉnh sửa =====
editBtn.onclick = function () {
    modal.style.display = "block";
};


form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("editName").value;
    const phone = document.getElementById("editPhone").value;
    const address = document.getElementById("editAddress").value;
    const group = document.getElementById("editGroup").value;

    // kiểm tra user tồn tại
    if(!user){
        alert("Không có dữ liệu người dùng!");
        return;
    }

    // cập nhật HTML
    document.getElementById("profileName").innerText = name;
    document.getElementById("profilePhone").innerText = phone;
    document.getElementById("profileAddress").innerText = address;
    document.getElementById("profileGroup").innerText = group;

    // cập nhật lại user
    user.hoten = name;
    user.sdt = phone;
    user.diachi = address;
    user.taikhoan = group;

    // lưu lại localStorage
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));

    // đóng modal
    modal.style.display = "none";

});