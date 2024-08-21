document.getElementById('discord-login').addEventListener('click', () => {
    window.location.href = 'https://discord.com/oauth2/authorize?client_id=1273652953458147388&response_type=code&redirect_uri=https%3A%2F%2Fedeniarp.github.io%2Fneuille%2F&scope=identify';
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
