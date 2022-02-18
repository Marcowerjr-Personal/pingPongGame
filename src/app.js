const express = require('express');
const mysqlConnection = require('./database.js');
const app = express.Router();

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/continue', (req, res) => {
    res.render('continue', { players: { player1_name: req.body.player1_name, player2_name: req.body.player2_name } });
});

app.post('/save_game', (req, res) => {
    mysqlConnection.query('INSERT INTO game_history SET ?', [req.body], (err) => {
        if (!err) {
            return res.json({ 'message': 'success' });
        } else {
            console.log(err);
        }
    });
});

module.exports = app;