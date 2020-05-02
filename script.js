$(document).ready(function () {
    $('#code').keydown(function (event) {

        if (event.which === 13) {
            let userInput = document.getElementById("code").value;
            if (userInput === "nighty night") {
                event.preventDefault();
                location.replace("stories/stories.html");
            } else if (userInput === "fluent quotes") {
                event.preventDefault();
                location.replace("quotes/quotes.html");
            }
        }
    });
});

