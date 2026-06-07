// ==========================================================
// Aryan Kelvin - Master Integration System (Final & Clean)
// ==========================================================

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const applySecurity = require('./Security'); 
const authRoutes = require('./UserAuth');    
const walletRoutes = require('./WalletManager'); 
const paymentRoutes = require('./PaymentGateway');

// 1. सुरक्षा लागू करें
applySecurity(app);

// 2. मिडिलवेयर
app.use(express.json());

// 3. राउट्स (Routes) - सिर्फ एक बार
app.use('/auth', authRoutes);
app.use('/wallet', walletRoutes);
app.use('/payment', paymentRoutes);

// 4. सर्वर चालू करें
const PORT = process.env.PORT || 8080;
http.listen(PORT, () => {
    console.log(`[MASTER SYSTEM] Aryan Kelvin Engine is LIVE on port ${PORT}`);
});
