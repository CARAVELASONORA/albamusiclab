const express = require("express");
require('dotenv').config(); // Load environment variables
const path = require("path");
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'wwwroot' directory
app.use(express.static(path.join(__dirname, 'wwwroot')));
app.use(express.json());

// --- EMAIL CONFIGURATION ---
// REPLACE THESE VALUES WITH YOUR REAL DETAILS
const transporter = nodemailer.createTransport({
  service: 'gmail', // or 'outlook', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email address from .env
    pass: process.env.EMAIL_PASSWORD // Your App Password from .env
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  console.log('Sending email from:', name, email);

  const mailOptions = {
    from: '"Alba Music Lab Website" <albamusiclab@gmail.com>', 
    to: 'albamusiclab@gmail.com', 
    subject: `New Inquiry from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    res.json({ success: true, message: 'Message sent!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

// Fallback to index.html for any other requests (SPA behavior, optional but good)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'wwwroot', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
