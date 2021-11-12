const scrollToHome = () => {
    document.getElementById("Home").scrollIntoView(true);
}
const scrollToAbout = () => {
    document.getElementById("About").scrollIntoView(true);
}
const scrollToSkill = () => {
    document.getElementById("Skill").scrollIntoView(true);
}
const scrollToPortfolio = () => {
    document.getElementById("Portfolio").scrollIntoView(true);
}
const scrollToContact = () => {
    document.getElementById("Contact").scrollIntoView(true);
}

window.addEventListener("scroll", function(event) {
    var scroll = this.scrollY;
    var activeHome = document.getElementById("nav-home");
    var activeAbout = document.getElementById("nav-about");
    var activeSkill = document.getElementById("nav-skill");
    var activePortfolio = document.getElementById("nav-portfolio");
    var activeContact = document.getElementById("nav-contact");
    if(scroll >= 0 && scroll <= 958) {
        activeHome.classList.add("active-state");
    } else {
        activeHome.classList.remove("active-state");
    }
    if(scroll >= 959 && scroll <= 1600) {
        activeAbout.classList.add("active-state");
    } else {
        activeAbout.classList.remove("active-state");
    }
    if(scroll >= 1601 && scroll <= 2600) {
        activeSkill.classList.add("active-state");
    } else {
        activeSkill.classList.remove("active-state");
    }
    if(scroll >= 2601 && scroll <= 3600) {
        activePortfolio.classList.add("active-state");
    } else {
        activePortfolio.classList.remove("active-state");
    }
    if(scroll > 3600) {
        activeContact.classList.add("active-state");
    } else {
        activeContact.classList.remove("active-state");
    }

});

$(document).ready(function() {
    document.getElementsByTagName("html")[0].style.visibility = "visible";
});

window.addEventListener('scroll', (e) => {  
    document.getElementById("menu-cover").style.display = "none";
})

function revealMenu() {
    document.getElementById("menu-cover").style.display = "table";
    document.getElementById("menu-cover").style.height = "1000vh";
}

var video = document.getElementById("home-video");
video.oncanplaythrough = function() {
    video.muted = true;
    video.play();
}


