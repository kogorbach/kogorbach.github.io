$(document).ready(function () {
    $('#code').keydown(function (event) {

        if (event.which === 13) {
        	let userInput = document.getElementById("code").value;
            event.preventDefault();
            if(userInput == "rainbowHoodie1488") {
            	location.replace("hoodiesSE/hoodie.html");
            } else if(userInput == "nighty night") {
            	location.replace("stories.html");
            } else if(userInput == "fluent quotes") {
                location.replace("quotes.txt");
        }
    });
});

