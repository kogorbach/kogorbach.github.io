function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.volume = 0.2;
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

$("#btn").click(function() {
    if (document.getElemenyById("text").value == "hoodies") {
        window.open("hoodies/hoodie.html")
    }
}
