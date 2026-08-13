function startMovie() {

    const story = document.getElementById("story");

    story.scrollIntoView({
        behavior: "smooth"
    });

}


function showInfo() {

    document.getElementById("info-popup").style.display = "flex";

}


function closeInfo() {

    document.getElementById("info-popup").style.display = "none";

}


function nextEpisode() {

    const next = document.querySelector(".episode");

    next.scrollIntoView({
        behavior: "smooth"
    });

}


/* Close popup when clicking outside */

window.addEventListener("click", function(event) {

    const popup = document.getElementById("info-popup");

    if (event.target === popup) {

        popup.style.display = "none";

    }

});
