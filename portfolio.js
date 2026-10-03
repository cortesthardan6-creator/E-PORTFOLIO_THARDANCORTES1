const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");


    if (navLinks.classList.contains("show")) {

        menuBtn.textContent = "✕";

    } else {

        menuBtn.textContent = "☰";

    }

});


/* Close menu after clicking navigation */

const navItems =
    document.querySelectorAll(".nav-link");


navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

        menuBtn.textContent = "☰";

    });

});



/* =========================================
   TYPING ANIMATION
========================================= */

const typingText =
    document.getElementById("typingText");


const words = [

    "English Major Student",

    "Creative Writer",

    "Literature Enthusiast",

    "Future Communicator"

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {


        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );


        characterIndex++;


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1600
            );

            return;

        }


    } else {


        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );


        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex >=
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    const speed =
        deleting ? 45 : 85;


    setTimeout(
        typeEffect,
        speed
    );

}


typeEffect();



/* =========================================
   LIGHT / DARK THEME
========================================= */

const themeBtn =
    document.getElementById("themeBtn");


/*
   Load saved theme
*/

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀";

} else {

    document.body.classList.remove("dark");

    themeBtn.textContent = "☾";

}



/*
   Toggle theme
*/

themeBtn.addEventListener(
    "click",
    function () {


        document.body.classList.toggle("dark");


        const darkMode =
            document.body.classList.contains("dark");


        if (darkMode) {

            themeBtn.textContent = "☀";

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            themeBtn.textContent = "☾";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    }
);



/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener(
    "scroll",
    function () {


        let current = "";


        sections.forEach(
            function (section) {


                const sectionTop =
                    section.offsetTop - 160;


                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >=
                    sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navItems.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) === "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".about-grid, " +
        ".skill-card, " +
        ".project-card, " +
        ".timeline-item, " +
        ".interest, " +
        ".contact-box"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("revealed");

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    function (element) {

        element.classList.add(
            "reveal"
        );

        observer.observe(
            element
        );

    }
);



/* =========================================
   PROJECT CARD EFFECT
========================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(
    function (card) {


        card.addEventListener(
            "mousemove",
            function (event) {


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const rotateX =
                    ((y / rect.height) - 0.5)
                    * -5;


                const rotateY =
                    ((x / rect.width) - 0.5)
                    * 5;


                card.style.transform =
                    `perspective(700px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform = "";

            }
        );

    }
);



/* =========================================
   BUTTON CLICK EFFECT
========================================= */

const buttons =
    document.querySelectorAll(
        ".btn"
    );


buttons.forEach(
    function (button) {


        button.addEventListener(
            "click",
            function () {


                button.style.transform =
                    "scale(0.97)";


                setTimeout(
                    function () {

                        button.style.transform =
                            "";

                    },
                    120
                );

            }
        );

    }
);



/* =========================================
   CURRENT YEAR
========================================= */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();
```
