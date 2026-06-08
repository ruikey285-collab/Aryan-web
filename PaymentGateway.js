const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');

router.post('/add-money', async (req, res) => {
    const { amount } = req.body;
    // आपकी असली UPI आईडी
    const realUpiId = "9302431003@idfcfirst"; 

    // न्यूनतम ₹10 का नियम
    if (amount < 10) {
        return res.status(400).json({ error: "न्यूनतम ₹10 जमा करना अनिवार्य है।" });
    }

    try {
        const upiLink = `upi://pay?pa=${realUpiId}&pn=RajuUikey&am=${amount}&cu=INR`;
        const qrCodeDataURL = await QRCode.toDataURL(upiLink);

        // यूजर को सिर्फ क्यूआर कोड भेजें
        res.status(200).json({ qrCode: qrCodeDataURL });
    } catch (err) {
        res.status(500).json({ error: "क्यूआर जनरेट करने में समस्या आई।" });
    }
});

module.exports = router;
