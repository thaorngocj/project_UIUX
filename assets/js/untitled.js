function login() {
  const name = document.getElementById("loginName").value.trim(); 
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  // Kiểm tra xem người dùng đã nhập đầy đủ chưa
  if (name=== "" || email === "" || password === "") {
    alert("Vui lòng nhập đầy đủ tên, email và mật khẩu.");
    return;
  }

  // Lấy dữ liệu người dùng đã lưu từ localStorage
  const savedEmail = localStorage.getItem("user_email");
  const savedPassword = localStorage.getItem("user_password");
  const savedName = localStorage.getItem("user_name");

  // Kiểm tra email và mật khẩu có khớp không
  if (name === savedName && email === savedEmail && password === savedPassword) {
    localStorage.setItem("isLoggedIn", "true");
    alert("Đăng nhập thành công!");
    window.location.href = "index.html";    
  } else {
    alert("Sai email hoặc mật khẩu!");
  }
}
function signup() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Kiểm tra xem có bỏ trống trường nào không
  if (name === "" || email === "" || password === "") {
    alert("Vui lòng nhập đầy đủ họ tên, email và mật khẩu.");
    return;
  }

  // Kiểm tra định dạng email đơn giản
  if (!email.includes("@") || !email.includes(".")) {
    alert("Email không hợp lệ.");
    return;
  }

  // Kiểm tra độ dài mật khẩu
  if (password.length < 6) {
    alert("Mật khẩu phải có ít nhất 6 ký tự.");
    return;
  }

  // Lưu vào localStorage
  localStorage.setItem("user_name", name);
  localStorage.setItem("user_email", email);
  localStorage.setItem("user_password", password);

  alert("Đăng ký thành công!");
  window.location.href = "login.html";
}

window.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const savedName = localStorage.getItem("user_name");

  const authLinks = document.getElementById("authLinks");
  const userMenu = document.getElementById("userMenu");
  const usernameDisplay = document.getElementById("usernameDisplay");
  const dropdownMenu = document.getElementById("dropdownMenu");

  if (isLoggedIn === "true" && savedName) {
    // Ẩn nút đăng nhập/đăng ký
    authLinks.style.display = "none";

    // Hiện tên người dùng
    userMenu.style.display = "block";
    usernameDisplay.textContent = savedName;

    // Xử lý toggle dropdown khi click vào tên
    userMenu.addEventListener("click", function () {
      dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Ẩn dropdown nếu click bên ngoài
    document.addEventListener("click", function (e) {
      if (!userMenu.contains(e.target)) {
        dropdownMenu.style.display = "none";
      }
    });
  }
});

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("user_name");
  localStorage.removeItem("user_email");
  localStorage.removeItem("user_password");
  window.location.reload(); // Tải lại trang để cập nhật giao diện
}


function verifyEmail() {
  const email = document.getElementById("resetEmail").value.trim();
  const savedEmail = localStorage.getItem("user_email");

  if (email === "") {
    alert("Vui lòng nhập email.");
    return;
  }

  if (email === savedEmail) {
    // Email đúng -> chuyển sang bước 2
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
  } else {
    alert("Email không tồn tại hoặc chưa đăng ký.");
  }
}

function resetPassword() {
  const newPass = document.getElementById("newPassword").value;
  const repeatPass = document.getElementById("repeatPassword").value;

  if (newPass === "" || repeatPass === "") {
    alert("Vui lòng nhập đầy đủ mật khẩu.");
    return;
  }

  if (newPass.length < 6) {
    alert("Mật khẩu phải có ít nhất 6 ký tự.");
    return;
  }

  if (newPass !== repeatPass) {
    alert("Mật khẩu nhập lại không khớp.");
    return;
  }

  // Cập nhật lại mật khẩu mới
  localStorage.setItem("user_password", newPass);
  alert("Đặt lại mật khẩu thành công!");
  window.location.href = "login.html";
}
