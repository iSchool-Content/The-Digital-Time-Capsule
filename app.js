// ?? Import the 'os' module
const os = require('os');
// ?? Import the function from utils.js
const { saveToCapsule } = require('./utils');

// 1. Capture the message from the terminal (process.argv)
// Hint: User arguments start at index 2
const userMessage = process.argv[2]; 

if (!userMessage) {
    console.log("⚠️ Error: Please provide a message! Example: node app.js 'Hello'");
    process.exit(1);
}

// 2. Use Object Destructuring to get 'username' from os.userInfo()
// ?? { username } = os.userInfo();

const capsuleData = {
    message: userMessage,
    author: username,
    system: os.platform(),
    timestamp: new Date().toLocaleString()
};

console.log(`🚀 Creating capsule for: ${username}...`);

// 3. CALL the function from Partner B to save the data
// ?? (capsuleData);
