var supertest = require('supertest');
var app = require('../index.js');
var request = supertest(app);

describe('POST /save_game', function () {
    describe('Saves a game in the database using the API', function () {
        it('should return the success message', function (done) {
            request.post('/save_game')
                .send({
                    first_player_name: 'Daniel',
                    second_player_name: `Marty`,
                    first_player_wins: 1,
                    second_player_wins: 5,
                    winner_player: 'Marty',
                    win_difference: 4
                })
                .expect(200)
                .end(function (err, res) {
                    if (err) done(err);
                    else done();
                });
        });
    });
});