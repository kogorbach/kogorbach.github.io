$(document).ready(function () {
    $('#code').keydown(function (event) {

        if (event.which === 13) {
        	let userInput = document.getElementById("code").value;
            if(userInput == "hoodie") {
            	event.preventDefault();//prevents form submission
            	location.replace("http://kogorbach.github.io/hoodies/hoodie.html");
            }
        }
    });
});

