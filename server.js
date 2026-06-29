// server.js (versi sederhana dengan dotenv + supabase)
console.log('🚀 Starting server...');

require('dotenv').config();
console.log('✅ Dotenv loaded');

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Cek koneksi Supabase (tanpa memuat routes)
const supabase = require('./config/supabaseClient');
console.log('✅ Supabase client loaded');

app.get('/', (req, res) => {
    res.json({ message: '🚀 API is running with Supabase!' });
});

app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di port ${PORT}`);
});