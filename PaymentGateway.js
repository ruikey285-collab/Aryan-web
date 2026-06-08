const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');

router.post('/add-money', async (req, res) => {
    const { amount } = req.body;
    const realUpiId = "9302431003@idfcfirst"; 
    if (amount < 10) return res.status(400).json({ error: "Min 10" });
    try {
        const url = await QRCode.toDataURL(`upi://pay?pa=${realUpiId}&pn=Raju&am=${amount}&cu=INR`);
        res.json({ qrCode: url });
    } catch (e) { res.status(500).json({ error: "Error" }); }
});

module.exports = router;
