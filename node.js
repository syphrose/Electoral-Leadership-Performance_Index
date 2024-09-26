const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/YOUR_FORM_ACTION_URL', async (req, res) => {
    const captchaResponse = req.body['g-recaptcha-response'];
    const secretKey = '6LfRhUkqAAAAAG455lad3fn37Jf7RFJPk121PC-H';

    const response = await axios.post(https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaResponse});
    const { success } = response.data;

    if (success) {
        // Proceed with form submission (e.g., send email or store data)
        res.send('Form submitted successfully!');
    } else {
        res.send('CAPTCHA verification failed. Please try again.');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});