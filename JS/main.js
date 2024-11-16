let linksC = document.querySelector(".links-c");

let menu = document.querySelector("nav ul");

let links = document.querySelectorAll("nav ul li");

let opened = false;

window.addEventListener("resize", () => {

    if (window.innerWidth >= 600) {

        if (opened) {

            linksC.click();

            opened = false;

        };

        menu.style.display = "flex";

    } else {

        menu.removeAttribute("style");

        opened = false;

    }

});

document.addEventListener("click", () => {

    if (opened) {

        linksC.click();

        opened = false;

    };

});

linksC.addEventListener("click", () => {

    if (!opened) {

        menu.style.display = "flex";

        setTimeout(() => {

            opened = true;

        }, 100);

    } else {

        menu.style.display = "none";

        opened = false;

    };

});

links.forEach(link => {

    link.addEventListener("click", () => {

        if (opened) {

            linksC.click();

            opened = false;

        };

    });

});