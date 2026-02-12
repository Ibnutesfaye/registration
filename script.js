document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginMessage = document.getElementById('loginMessage');
    const registerMessage = document.getElementById('registerMessage');
    
    // Toggles
    const showRegisterBtn = document.getElementById('showRegister');
    const showLoginBtn = document.getElementById('showLogin');

    // Switch to Register
    showRegisterBtn.addEventListener('click', () => {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        loginMessage.textContent = '';
    });

    // Switch to Login
    showLoginBtn.addEventListener('click', () => {
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        registerMessage.textContent = '';
    });

    // Registration Handler
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('regUsername').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value;

        if (!username || !email || !password) {
            showMessage(registerMessage, 'Please fill all fields.', 'red');
            return;
        }

        if (!isValidEmail(email)) {
             showMessage(registerMessage, 'Please enter a valid email.', 'red');
             return;
        }

        if (password.length < 6) {
            showMessage(registerMessage, 'Password must be at least 6 characters.', 'red');
            return;
        }

        // Simulate API call
        showMessage(registerMessage, 'Registration successful! Redirecting...', 'green');
        setTimeout(() => {
            registerForm.reset();
            showLoginBtn.click();
            showMessage(registerMessage, '', 'red'); // Clear message
        }, 1500);
    });

    // Login Handler
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;

        if (!email || !password) {
            showMessage(loginMessage, 'Please fill all fields.', 'red');
            return;
        }

        // Simulate API call
        showMessage(loginMessage, 'Login successful!', 'green');
    });

    // Helper: Show Message
    function showMessage(element, text, color) {
        element.style.color = color === 'green' ? '#43cea2' : '#e63946';
        element.innerText = text;
    }

    // Helper: Email Validation
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
