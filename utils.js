// ?? Import the 'fs' module
const fs = require('fs');

const saveToCapsule = (dataObject) => {
    try {
        // 1. Turn the dataObject into a formatted JSON string
        const jsonString = JSON.stringify(dataObject, null, 2);

        // 2. Write the string to a file called 'capsule.json'
        // Hint: fs.writeFileSync(fileName, data)
        // ?? ('capsule.json', ??);

        console.log("✅ Locked! Check your folder for capsule.json");
    } catch (error) {
        console.error("❌ Error writing to file:", error.message);
    }
};

// 3. EXPORT the function so Partner A can use it
// ?? = { saveToCapsule };
