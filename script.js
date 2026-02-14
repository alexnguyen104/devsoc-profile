document.getElementById("dream").onclick = function(){
    document.getElementById("later").style.visibility = "visible"
    document.getElementById("later").style.animation = "fadein 1s"
    setTimeout(function () {
        document.getElementById("later2").style.visibility = "visible"
        document.getElementById("later2").style.animation = "fadein 1s"
        document.getElementById("btn").style.visibility = "visible"
        document.getElementById("btn").style.animation = "fadein 1s"
    }, 2000);
}

document.getElementById("start").onclick = function(){
    var audio = document.getElementById("background_music");
    audio.play();
    window.location = "#detail"
}

function to_top() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
    document.getElementById("home").classList.toggle("dark")
    document.getElementById("detail").classList.toggle("dark")
    document.getElementById("hobbies").classList.toggle("dark")
    document.getElementById("dream").classList.toggle("dark")

    if (document.body.classList.contains("dark")) {
        document.getElementById("icon").className = "fas fa-moon"
        document.getElementById("info").style.color = "white"
        document.getElementById("home").getElementsByTagName("span")[0].style.color = "wheat"
        document.getElementById("kirby").src = "assets/pic.gif"
        document.getElementsByClassName("checkbox-label")[0].style.backgroundColor  = "white"
        document.getElementsByClassName("ball")[0].style.backgroundColor  = "black"
    } else {
        document.getElementById("info").style.color = "black"
        document.getElementById("icon").className = "fas fa-sun"
        document.getElementById("home").getElementsByTagName("span")[0].style.color = "white"
        document.getElementById("kirby").src = "assets/pic2.gif"
        document.getElementsByClassName("checkbox-label")[0].style.backgroundColor  = "black"
        document.getElementsByClassName("ball")[0].style.backgroundColor  = "white"
    }
})