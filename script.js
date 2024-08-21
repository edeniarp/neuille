document.getElementById('discord-login').addEventListener('click', () => {
    const clientId = 'VOTRE_CLIENT_ID';
    const redirectUri = 'https://VOTRE_UTILISATEUR.github.io/NOM_DU_REPOSITORY';
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

                const webhookUrl = 'VOTRE_WEBHOOK_URL_DISCORD';
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

