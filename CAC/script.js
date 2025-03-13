function showForm(formType) {
    document.getElementById('loginForm').style.display = formType === 'login' ? 'block' : 'none';
    document.getElementById('signupForm').style.display = formType === 'signup' ? 'block' : 'none';
}


function submitLogin() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    if (username && password) {
        alert('Login Successful');
        window.location.href = 'vehicle-selection.html';
    } else {
        alert('Please enter a valid username and password.');
    }
}

function submitSignup() {
    let username = document.getElementById('signupUsername').value;
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;

    if (username && email && password) {
        alert('Signup Successful! Redirecting to Login...');
        document.getElementById('signupForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    } else {
        alert('Please fill all fields.');
    }
}
