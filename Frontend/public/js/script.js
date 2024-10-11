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

    fetch('/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TU8fd0eab52938979eddccfb6db00e95e1285e206739101818b7e36ce93d45958c3b042bf26f687271fb992beaff3650ca'
        },
        body: 
        JSON.stringify({ 
            UserName, 
            PassWord 
        })
    })
    .then(response => response.json())
    .then(data => {
        //hide form and show message
        document.getElementById('form').style.display = 'none';
        const resultDiv = document.getElementById('result');
        resultDiv.style.display = 'block';

        if (data.status) {
            document.getElementById('status').innerText = `Login successful!\nHello and Welcome,\n`;
            document.getElementById('message').innerText = 
                `Username: ${data.username}\n` +
                `Name: ${data.displayname_en}\n` +
                `Role: ${data.type}\n` +
                `Faculty: ${data.faculty}, ${data.department}\n` +
                `Contact: ${data.email}`;
        } else {
            document.getElementById('status').innerText = `[Fail]\n`;
            document.getElementById('message').innerText = `Username & Password Invalid!\n` + `Please reload this page and try again`;
        }
    })
    .catch(error => console.error('Error:', error));
}

function call_REST_API_Hello() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = (
        'http://localhost:8080/testservice/hello?' +
        new URLSearchParams({ myName: username, lastName: password}).toString()
      );
    
    fetch(url)
    .then(response => response.text())
    .then(text => {
        document.getElementById('message').innerText = text;
    })
    .catch(error => console.error('Error:', error));
}
