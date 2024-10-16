function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Show the password
        eyeIcon.src = 'img/eye-open-icon.png';
        eyeIcon.alt = 'Hide Password';
    } else {
        passwordInput.type = 'password'; // Hide the password
        eyeIcon.src = 'img/eye-close-icon.png';
        eyeIcon.alt = 'Show Password';
    }
}

function submitLogin() {
    const UserName = document.getElementById('username').value;
    const PassWord = document.getElementById('password').value;
    const checkDiv = document.getElementById('check');

    if (!UserName || !PassWord) {
        checkDiv.innerText = '*Please enter your username & password*';
        return;
    }
    else {
        document.getElementById('form').style.display = 'none';
        const resultDiv = document.getElementById('result');
        resultDiv.style.display = 'block';
        document.getElementById('status').innerText = 'test';
        document.getElementById('message').innerText = 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices tortor quis ex lobortis, vitae sagittis nibh ullamcorper. In semper.';
    }

    
    /*
    fetch('/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ UserName, PassWord })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
    */
}


/*
function call_REST_API_Hello() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = (
        'http://localhost:8080/hello?' +
        new URLSearchParams({ myName: username, lastName: password}).toString()
      );
    
    fetch(url)
    .then(response => response.text())
    .then(text => {
        document.getElementById('message').innerText = text;
    })
    .catch(error => console.error('Error:', error));
}
*/