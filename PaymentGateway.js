const express = require('express');
const router = express.Router();

// बेसिक पेमेंट गेटवे राउट
router.get('/', (req, res) => {
    res.send("[PAYMENT] Payment Gateway is ready to process transactions.");
});

module.exports = router;
