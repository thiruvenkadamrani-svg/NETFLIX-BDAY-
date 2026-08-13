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
/* =====================================================
   CINEMATIC EPISODE TRANSITION
===================================================== */

function goToEpisode(id) {

    const episode = document.getElementById(id);

    const transition =
        document.getElementById("episode-transition");

    const transitionTitle =
        document.getElementById("transition-episode");


    if (!episode || !transition) {
        return;
    }


    /* Get episode number */

    const number =
        episode.querySelector(".episode-number");


    if (number) {

        transitionTitle.textContent =
            number.textContent;

    }


    /* Show cinematic transition */

    transition.classList.add("active");


    /* Open episode */

    setTimeout(function() {

        episode.scrollIntoView({
            behavior: "smooth"
        });

    }, 1200);


    /* Remove transition */

    setTimeout(function() {

        transition.classList.remove("active");

    }, 1900);

}
/* =====================================================
   UPGRADE 6 — SCROLL REVEAL
===================================================== */

const revealSections =
    document.querySelectorAll(
        ".story-section, .episode"
    );


const revealObserver =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.2
        }
    );


revealSections.forEach(function(section) {

    revealObserver.observe(section);

});










