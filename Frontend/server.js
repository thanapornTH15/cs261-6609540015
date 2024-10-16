const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/auth', async (req, res) => {
    const { UserName, PassWord } = req.body;

    if (!UserName || !PassWord) {
        return res.status(400).json({ error: 'Please enter your username and password' });
    }

    try {
        const response = await fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Application-Key': 'TU8fd0eab52938979eddccfb6db00e95e1285e206739101818b7e36ce93d45958c3b042bf26f687271fb992beaff3650ca'
            },
            body: JSON.stringify({
                UserName,
                PassWord
            })
        });


        const data = await response.json();
        res.status(200).json(data);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server error' });
    }

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
