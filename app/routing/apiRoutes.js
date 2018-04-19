var path = require('path');

var friends = require('../data/friends.js');

module.exports = function (app) {
    // console.log("working")
    app.post("/api/friends", function (req, res) {
        console.log(" stll working")
        var userInput = req.body;
        var userResponses = userInput.scores;
        console.log(userInput.scores); 

        var matchName = "";
        var matchImage = "";
        var totalDifference = 1000;

        for (var i = 0; i < friends.length; i++) {
            console.log("friend found");


            var diff = 0;
            for (var i = 0; i < userResponses.length; i++) {
                diff += Math.abs(friends[i].scores[i] - userResponses[i]); {

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