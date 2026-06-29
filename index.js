// index.js
try {
    console.log('🔄 Loading server.js...');
    require('./server.js');
    console.log('✅ Server.js loaded successfully');
} catch (err) {
    console.error('❌ Failed to load server.js:');
    console.error('   Name:', err.name);
    console.error('   Message:', err.message);
    console.error('   Stack:', err.stack);
    process.exit(1);
}