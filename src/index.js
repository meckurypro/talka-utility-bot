// index.js

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const webhookRoutes = require('./routes/webhook');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/webhook', webhookRoutes);

// Root route (for testing)
app.get('/', (req, res) => {
  res.send('👋🏽 Talka Utility Bot by Meckury is live!');
});

// Error Handling
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Talka Utility running on port ${PORT}`);
});
