import fs from 'fs';
import fetch from 'node-fetch';

let data;

fs.readFile('config.json', 'utf8', (err, contents) => {
    if (err) {
        console.error(err);
    } else {
        data = JSON.parse(contents);
        changeDiscordStatus(data.token);
    }
});

function changeDiscordStatus(token) {
    const statusMessage = data.statusMessage;
    
    let messageIndex = 0;

    function updateStatus() {
        const statusText = statusMessage[messageIndex];
        fetch('https://discordapp.com/api/v6/users/@me/settings', {
            method: 'PATCH',
            headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                custom_status: {
                    text: statusText
                }
            })
        })
        .then(response => {
            if (response.ok) {
                console.log('Status changed successfully to:', statusText);
            } else {
                 console.error('Failed to change status. HTTP status:', response.status);
            }
        })
        .catch(error => {
            console.error('An error occurred while changing the status:', error.message);
        });

        messageIndex = (messageIndex + 1) % statusMessage.length;
    }

    setInterval(updateStatus, data.set_time_interval_sec * 1000);
    
}
