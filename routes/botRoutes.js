const express = require("express");
const router = express.Router();
const botController = require("../controllers/botControllers")

// Route to check if the bot is running
router.get("/", (req, res) => {
    res.send("Telegram Bot is running")
})

// Webhook route to handle Telegram messages
router.post("/webhook", botController.handleWebhook);

module.exports = router;