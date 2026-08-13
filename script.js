/* =====================================================
   MY SUNSHINE — FINAL SCRIPT
===================================================== */


/* =====================================================
   HERO — PLAY
===================================================== */

function startMovie() {

    const story =
        document.getElementById("story");

    if (story) {

        story.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================================
   INFO POPUP
===================================================== */

function showInfo() {

    const popup =
        document.getElementById("info-popup");

    if (popup) {

        popup.style.display = "flex";

    }

}


function closeInfo() {

    const popup =
        document.getElementById("info-popup");

    if (popup) {

        popup.style.display = "none";

    }

}


/* Close info popup when clicking outside */

window.addEventListener(
    "click",
    function(event) {

        const popup =
            document.getElementById(
                "info-popup"
            );

        if (
            popup &&
            event.target === popup
        ) {

            popup.style.display = "none";

        }

    }
);


/* =====================================================
   EPISODE 01 → CONTINUE
===================================================== */

function nextEpisode() {

    goToEpisode("episode2");

}


/* =====================================================
   CINEMATIC EPISODE TRANSITION
===================================================== */

function goToEpisode(id) {

    const episode =
        document.getElementById(id);

    const transition =
        document.getElementById(
            "episode-transition"
        );

    const transitionTitle =
        document.getElementById(
            "transition-episode"
        );


    if (!episode) {

        return;

    }


    /* ---------------------------------------------
       Find episode number
    --------------------------------------------- */

    const number =
        episode.querySelector(
            ".episode-number"
        );


    if (number && transitionTitle) {

        transitionTitle.textContent =
            number.textContent;

    }


    /* ---------------------------------------------
       Show cinematic transition
    --------------------------------------------- */

    if (transition) {

        transition.classList.add(
            "active"
        );

    }


    /* ---------------------------------------------
       Scroll after cinematic delay
    --------------------------------------------- */

    setTimeout(
        function() {

            episode.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        },
        1200
    );


    /* ---------------------------------------------
       Remove transition
    --------------------------------------------- */

    setTimeout(
        function() {

            if (transition) {

                transition.classList.remove(
                    "active"
                );

            }

        },
        1900
    );

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealSections =
    document.querySelectorAll(
        ".story-section, .episode"
    );


if (
    "IntersectionObserver"
    in window
) {

    const revealObserver =
        new IntersectionObserver(
            function(entries) {

                entries.forEach(
                    function(entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.2
            }
        );


    revealSections.forEach(
        function(section) {

            revealObserver.observe(
                section
            );

        }
    );

}


/* =====================================================
   SECRET SUNSHINE EASTER EGG
===================================================== */

function openSunshineSecret() {

    const secret =
        document.getElementById(
            "sunshine-secret"
        );

    if (secret) {

        secret.classList.add(
            "active"
        );

    }

}


function closeSunshineSecret() {

    const secret =
        document.getElementById(
            "sunshine-secret"
        );

    if (secret) {

        secret.classList.remove(
            "active"
        );

    }

}


/* Close secret popup when clicking outside */

window.addEventListener(
    "click",
    function(event) {

        const secret =
            document.getElementById(
                "sunshine-secret"
            );

        if (
            secret &&
            event.target === secret
        ) {

            secret.classList.remove(
                "active"
            );

        }

    }
);


/* =====================================================
   FINAL CINEMATIC TOUCH
===================================================== */

window.addEventListener(
    "load",
    function() {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
/* =====================================================
   UPGRADE 11 — MUSIC CONTROL
===================================================== */

function toggleMusic() {

    const music =
        document.getElementById(
            "background-music"
        );

    const button =
        document.getElementById(
            "music-toggle"
        );

    if (!music || !button) {
        return;
    }

    if (music.paused) {

        music.play()
            .then(function() {

                button.textContent = "🔊";

            })
            .catch(function(error) {

                console.log(
                    "Music could not start:",
                    error
                );

            });

    } else {

        music.pause();

        button.textContent = "🔇";

    }

}
