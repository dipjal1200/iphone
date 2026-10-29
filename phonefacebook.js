const eyeBtn = document.getElementById('eye');
const passInput = document.getElementById('pass');

// Hide eye icon by default
eyeBtn.style.display = 'none';

// Show eye icon once user starts typing
passInput.addEventListener('input', () => {
    if (passInput.value.length > 0) {
        eyeBtn.style.display = 'inline-block';
    } else {
        eyeBtn.style.display = 'none';
    }
});

// Toggle password visibility on eye click
eyeBtn.addEventListener('click', () => {
    const isPassword = passInput.type === 'password';
    passInput.type = isPassword ? 'text' : 'password';
    eyeBtn.innerHTML = isPassword 
        ? '<i class="fa-regular fa-eye-slash"></i>' 
        : '<i class="fa-regular fa-eye"></i>';
});