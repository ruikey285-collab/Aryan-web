const express = require('express');
const router = express.Router();

// बेसिक वॉलेट मैनेजमेंट राउट
router.get('/', (req, res) => {
    res.send("[WALLET] Wallet Manager is operational.");
});

module.exports = router;
