const axios = require("axios")

require("dotenv").config();

// Controller to handle incoming webhook requests
exports.handleWebhook = async (req, res) => {
    const message = req.body.message;

    if(message) {
        const chatId = message.chat.id;
        const text = message.text;

        // Handle the /start command
        if(text === "/start") {
            await sendMessage(chatId, 'Welcome to the bot! Type something.')
        } else {
            await sendMessage(chatId, `You said: ${text}`);
        }
    }

    res.sendStatus(200);  // Respond to Telegram to acknowledge the update
};


// Function to send messages using Telegram API
const sendMessage = async (chatId, text) => {
    try {
        await axios.post(`${process.env.TELEGRAM_URL}/sendMessage`, {
            chat_id: chatId,
            text: text
        });
    } catch(error) {
        console.error('Error sending message:', error);
    }
}