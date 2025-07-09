const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-whatsapp', async (req, res) => {
    try {
        const { name, email, budget, message, to } = req.body;
        
        // Fallback values if some fields missing
        const formattedMessage = `New Contact Form Submission:%0A%0A` +
            `Name: ${name || ''}%0A` +
            `Email: ${email || ''}%0A` +
            `Budget: ${budget || ''}%0A` +
            `Message: ${message || ''}`;

        console.log('Received message:', formattedMessage);
        console.log('Sending to:', to);

        // Create WhatsApp Web URL
        const encodedMessage = formattedMessage; // already URI encoded
        const whatsappUrl = `https://web.whatsapp.com/send?phone=${to}&text=${encodedMessage}`;

        // Open WhatsApp Web in default browser
        const { exec } = require('child_process');
        exec(`start ${whatsappUrl}`);

        res.json({ 
            success: true, 
            message: 'WhatsApp Web is opening...',
            whatsappUrl: whatsappUrl
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to open WhatsApp Web. Please try again.',
            error: error.message
        });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});