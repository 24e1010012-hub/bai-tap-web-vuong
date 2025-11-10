// Thông tin tài khoản đúng (demo)
const CORRECT_USERNAME = 'admin';
const CORRECT_PASSWORD = '123';

// Khi click đăng nhập
document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      const u = document.getElementById('username').value.trim();
      const p = document.getElementById('password').value;

      const errorMsg = document.getElementById('errorMsg');
      errorMsg.textContent = '';

      if (u === CORRECT_USERNAME && p === CORRECT_PASSWORD) {
        // Lưu trạng thái đăng nhập (localStorage demo)
        localStorage.setItem('loggedIn', 'true');
        // Chuyển tới trang chủ
        window.location.href = 'home.html';
      } else {
        errorMsg.textContent = 'Tài khoản hoặc mật khẩu không đúng.';
      }
    });
  }

  // Khi ở trang home, kiểm tra nếu chưa đăng nhập => quay lại login
  if (window.location.pathname.endsWith('home.html')) {
    if (localStorage.getItem('loggedIn') !== 'true') {
      window.location.href = 'login.html';
    }
    // Xử lý đăng xuất
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('loggedIn');
        window.location.href = 'login.html';
      });
    }
  }
});
