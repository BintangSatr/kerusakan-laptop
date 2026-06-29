// api/index.js
const app = require('../server'); // <-- Panggil server.js kita

// Ekspor app-nya langsung, tanpa app.listen()
module.exports = app;