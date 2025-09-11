alert("I only have roughly 2 nights before the deadline and I am really busy so this website is not responsive... (please use the computer) ❤️‍🔥.")

document.getElementById("dream").onclick = function(){
    document.getElementById("later").style.visibility = "visible"
    document.getElementById("later").style.animation = "fadein 2s"
    setTimeout(function () {
        document.getElementById("later2").style.visibility = "visible"
        document.getElementById("later2").style.animation = "fadein 2s"
        document.getElementById("btn").style.visibility = "visible"
        document.getElementById("btn").style.animation = "fadein 2s"
    }, 2000);
}

document.getElementById("btn").onclick = function(){
    var audio = document.getElementById("audio");
    audio.play();
}