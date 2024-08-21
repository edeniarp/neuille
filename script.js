document.getElementById('discord-login').addEventListener('click', () => {
    const clientId = '1166902447353122896';
    const redirectUri = 'https://edeniarp.github.io/neuille/';
    const scope = 'identify';
    
    window.location.href = `https://discord.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;
});

window.onload = () => {
    const hash = window.location.hash;
    if (hash) {
        const token = new URLSearchParams(hash.substring(1)).get('access_token');

        if (token) {
            fetch('https://discord.com/api/users/@me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(data => {
                const discordUserId = data.id;

                const webhookUrl = 'https://discord.com/api/webhooks/1273657947024654376/kgCCA9Cc65zomW-vWqAKM_8hCUBizn4C7KCsQPDHDKEdLcmsRvb9682JO7ZbJn9o4t-i';
                fetch(webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        content: `Nouvelle connexion: ID utilisateur Discord - ${discordUserId}`
                    })
                });
            })
            .catch(console.error);
        }
    }
}

