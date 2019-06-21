var panel = $("#gamebox");

$(document).on("click", "#start", function (event) {
    game.start();
});
$(document).on("click", "#done", function (event) {
    game.done();
});

var questions = [{
    question: "Which movie is Jason in?",
    choices: ["Halloween", "Friday the 13th", "Nightmare on Elm Street"],
    correctAnswer: "Friday the 13th"
},
{
    question: "Which movie is Ghostface in?",
    choices: ["Scream", "The Texas Chainsaw Massacre", "Psycho"],
    correctAnswer: "Scream"
},
{
    question: "Which movie is Ash in?",
    choices: ["Evil Dead", "The Omen", "The Shining"],
    correctAnswer: "Evil Dead"
},
{
    question: "Where does the quote 'I see dead people' come from?",
    choices: ["The Others", "Hellraiser", "The Sixth Sense"],
    correctAnswer: "The Sixth Sense"
},
{
    question: "Which movie is a comical zombie flick?",
    choices: ["Scary Movie", "Shaun of the Dead", "Evil Dead"],
    correctAnswer: "Shaun of the Dead"
},
{
    question: "Which movie is Leatherface in?",
    choices: ["The Silence of the Lambs", "Texas Chainsaw Massacre", "Rosemary's Baby"],
    correctAnswer: "Texas Chainsaw Massacre"
},
{
    question: "Which movie involves a poor young girl being possesed?",
    choices: ["The Exorcist", "The Orphanage", "Poltergeist"],
    correctAnswer: "The Exorcist"
}];

var game = {
    correct: 0,
    incorrect: 0,
    countdown: 90,

    countdown: function () {
        game.countdown--;
        $("#counter-number").html(game.countdown);
        if (game.countdown === 0) {
            alert("Out of Time!");
            game.done();
            console.log(countdown)
        }
    },
    // Can't get counter to stay on screen
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#insidecontainer').prepend('<h2>Time Remaining: <span id="counter-number">90</span> Seconds</h2>');
        $("#start").remove();
        console.log(timer)

        for (var i = 0; i < questions.length; i++) {
            panel.append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].choices.length; j++) {
                panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j]);
            }
        }
        panel.append("<button id='done'>Done!</button>");
    },

    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.results();
    },


    results: function () {
        clearInterval(timer);
        // Can't get end screen to come up
        $("#insidecontainer").remove();
        panel.html("<h2>Done!</h2>");
        panel.append("<h3>You got this many right: " + this.correct + "</h3>");
        panel.append("<h3>You got this many wrong: " + this.incorrect + "</h3>");
        panel.append("<h3>This is how many you didn't answer: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
};