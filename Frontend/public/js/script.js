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
            addToDB(data)
                .then(() => {        
                document.getElementById('status').innerText = `Login successful!\nHello and Welcome,\n`;
                document.getElementById('message').innerText = 
                `Username: ${data.username}\n` +
                `Name: ${data.displayname_en}\n` +
                `Role: ${data.type}\n` +
                `Faculty: ${data.faculty}, ${data.department}\n` +
                `Contact: ${data.email}`;
            })
            .catch(error => {
                alert(console.error('Error:', error));
            });
        } else {
            document.getElementById('status').innerText = `[Fail]\n`;
            document.getElementById('message').innerText = `Username & Password Invalid!\n` + `Please reload this page and try again`;
        }
    })
    .catch(error => console.error('Error:', error));
}

function backtoLogin() {
    document.getElementById('form').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('message').innerText = '';
}

function addToDB(user) {
    fetch('api/users/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userName: user.username,
            type: user.type,
            engName: user.displayname_en,
            email: user.email,
            faculty: user.faculty
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to save user data to database");
        }
        return response.text();
    })
    .then(message => {
        console.log(message);
    });
}