const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');

router.post('/add-money', async (req, res) => {
    try {
        const { amount } = req.body;
        const realUpilId = "9302431003@hdfcbank";
        
        if (!amount || amount < 10) {
            return res.status(400).json({ error: "Min 10" });
        }

        const url = await QRCode.toDataURL(`upi://pay?pa=${realUpilId}&pn=Raju&am=${amount}&cu=INR`);
        res.json({ qrCode: url });
    } catch (e) {
        res.status(500).json({ error: "Error" });
    }
});

module.exports = router;
