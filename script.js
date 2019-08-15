$(document).ready(function () {
    $('#code').keydown(function (event) {

        if (event.which === 13) {
        	let userInput = document.getElementById("code").value;
            if(userInput == "rainbowHoodie") {
            	event.preventDefault(); //prevents form submission
            	location.replace("hoodiesSE/hoodie.html");
            }
        }
    });
});

