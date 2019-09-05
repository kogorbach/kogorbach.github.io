$(document).ready(function () {
    $('#code').keydown(function (event) {

        if (event.which === 13) {
        	let userInput = document.getElementById("code").value;
            if(userInput == "rainbowHoodie1488") {
                event.preventDefault();
            	location.replace("hoodiesSE/hoodie.html");
            } else if(userInput == "nighty night") {
                event.preventDefault();
            	location.replace("stories.html");
            } else if(userInput == "fluent quotes") {
                event.preventDefault();
                location.replace("quotes/quotes.txt");
        }
        }   
    });
});

