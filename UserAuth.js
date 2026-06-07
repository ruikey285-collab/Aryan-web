const express = require('express');
const router = express.Router();

// बेसिक ऑथेंटिकेशन राउट
router.get('/', (req, res) => {
    res.send("[AUTH] User Authentication System is operational.");
});

module.exports = router;
