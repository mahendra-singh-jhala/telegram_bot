const express = require("express");
const bodyParser = require("body-parser");
const botRoutes = require("./routes/botRoutes")
const cors = require('cors');

// Load Enviorment Variable
require("dotenv").config();

const app = express();

// cors
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Load routes
app.use("/", botRoutes)


PORT = process.env.PORT || 4000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:4000`);
})