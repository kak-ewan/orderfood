// Fungsi login sederhana
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    
    if (password === '123') {
        window.location.href = 'admin.html';
    } else {
        window.location.href = 'menu.html';
    }
});
