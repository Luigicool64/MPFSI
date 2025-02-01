require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Permettre toutes les origines
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Configuration de la connexion à la base de données
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
};

// Fonction pour établir la connexion à la base de données
async function getConnection() {
    return await mysql.createConnection(dbConfig);
}

// Obtenir tous les messages
app.get('/messages', async (req, res) => {
    const connection = await getConnection();
    const [rows] = await connection.execute('SELECT * FROM messages');
    await connection.end();
    res.json(rows);
});

// Obtenir un message spécifique par ID
app.get('/message/:id', async (req, res) => {
    const connection = await getConnection();
    const [rows] = await connection.execute('SELECT * FROM messages WHERE id = ?', [req.params.id]);
    await connection.end();

    if (rows.length > 0) {
        res.json(rows[0]);
    } else {
        res.status(404).json({ error: 'Message introuvable' });
    }
});

// Poster un nouveau message
app.post('/messages', async (req, res) => {
    const { date, nom_entreprise, telephone, message, email } = req.body;

    // Validation des entrées
    if (!date || !nom_entreprise || !telephone || !message || !email) {
        return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    const connection = await getConnection();
    const [result] = await connection.execute('INSERT INTO messages (date, nom_entreprise, telephone, message, email) VALUES (?, ?, ?, ?, ?)', [date, nom_entreprise, telephone, message, email]);
    await connection.end();

    res.status(201).json({ id: result.insertId, message: 'Message ajouté avec succès' });
});

// Mettre à jour un message
app.put('/messages/:id', async (req, res) => {
    const { nom_entreprise, telephone, message, email } = req.body;
    const connection = await getConnection();

    const [result] = await connection.execute('UPDATE messages SET nom_entreprise = ?, telephone = ?, message = ?, email = ? WHERE id = ?', [nom_entreprise, telephone, message, email, req.params.id]);
    await connection.end();

    if (result.affectedRows > 0) {
        res.json({ message: 'Message mis à jour avec succès' });
    } else {
        res.status(404).json({ error: 'Message introuvable' });
    }
});

// Supprimer un message
app.delete('/messages/:id', async (req, res) => {
    const connection = await getConnection();
    const [result] = await connection.execute('DELETE FROM messages WHERE id = ?', [req.params.id]);
    await connection.end();

    if (result.affectedRows > 0) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Message introuvable' });
    }
});

// Obtenir toutes les formations
app.get('/formations', async (req, res) => {
    const connection = await getConnection();
    const [rows] = await connection.execute('SELECT * FROM formation');
    await connection.end();
    res.json(rows);
});

// Obtenir une formation spécifique par ID
app.get('/formation/:id', async (req, res) => {
    const connection = await getConnection();
    const [rows] = await connection.execute('SELECT * FROM formation WHERE id = ?', [req.params.id]);
    await connection.end();

    if (rows.length > 0) {
        res.json(rows[0]);
    } else {
        res.status(404).json({ error: 'Formation introuvable' });
    }
});

// Poster une nouvelle formation
app.post('/formations', async (req, res) => {
    const { title, type, durée, nb_personne, prérequis, précition } = req.body;

    // Validation des entrées
    if (!title || !type || !durée || !nb_personne || !prérequis || !précition) {
        return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    const connection = await getConnection();
    const [result] = await connection.execute('INSERT INTO formation (title, type, durée, nb_personne, prérequis, précition) VALUES (?, ?, ?, ?, ?, ?)', [title, type, durée, nb_personne, prérequis, précition]);
    await connection.end();

    res.status(201).json({ id: result.insertId, message: 'Formation ajoutée avec succès' });
});

// Mettre à jour une formation
app.put('/formations/:id', async (req, res) => {
    const { title, type, durée, nb_personne, prérequis, précition } = req.body;
    const connection = await getConnection();

    const [result] = await connection.execute('UPDATE formation SET title = ?, type = ?, durée = ?, nb_personne = ?, prérequis = ?, précition = ? WHERE id = ?', [title, type, durée, nb_personne, prérequis, précition, req.params.id]);
    await connection.end();

    if (result.affectedRows > 0) {
        res.json({ message: 'Formation mise à jour avec succès' });
    } else {
        res.status(404).json({ error: 'Formation introuvable' });
    }
});

// Supprimer une formation
app.delete('/formations/:id', async (req, res) => {
    const connection = await getConnection();
    const [result] = await connection.execute('DELETE FROM formation WHERE id = ?', [req.params.id]);
    await connection.end();

    if (result.affectedRows > 0) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Formation introuvable' });
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});