const express = require('express');
const axios = require('axios');
const qs = require('qs');

const app = express();
const port = 3000;

const clientID = 'VOTRE_CLIENT_ID';
const clientSecret = 'VOTRE_CLIENT_SECRET';
const redirectUri = 'VOTRE_URL_REDIRECTION';

app.get('/callback', async (req, res) => {
    const code = req.query.code;

    try {
        // Échanger le code contre un token
        const tokenResponse = await axios.post('https://discord.com/api/oauth2/token', qs.stringify({
            client_id: clientID,
            client_secret: clientSecret,
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirectUri
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const accessToken = tokenResponse.data.access_token;

        // Récupérer les informations utilisateur
        const userResponse = await axios.get('https://discord.com/api/users/@me', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        const userId = userResponse.data.id;
        const username = userResponse.data.username;

        // Vous pouvez maintenant envoyer l'ID de l'utilisateur à un webhook ou l'afficher sur la page
        console.log(`L'ID de l'utilisateur est : ${userId}`);

        // Redirige l'utilisateur vers la page HTML avec un message de succès
        res.send(`<html><body><h1>Bonjour, ${username}! Votre ID Discord est : ${userId}</h1></body></html>`);

    } catch (error) {
        console.error('Erreur lors de la récupération du token:', error);
        res.status(500).send('Une erreur est survenue.');
    }
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});