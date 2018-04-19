var path = require('path');

var friends = require('../data/friends.js');

module.exports = function (app) {

    app.get("api/friends", function (req, res) {
        var userInput = req.body;
        var userResponses = userInput.scores;

        var matchName = "";
        var matchImage = "";
        var totalDifference = 1000;

        for (var i = 0; i < friends.length; i++) {
            console.log("friend found");


            var diff = 0;
            for (var i = 0; i < userResponses.lenght; i++) {
                diff += math.abd(friends[i].scores[i] - userResponses[i]); {

                }
                if (diff < totalDifference) {
                    console.log('match found');

                    totalDifference = diff;
                    matchName = friends[i].name;
                    matchImage = friends[i].photo;
                }

            }

            friends.push(userInput);

            res.json({ status: "ok", matchName, matchImage: matchImage });
        };
    })
}