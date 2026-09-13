/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-open");

    });

}


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-open");

    });

});


/* =========================================================
   FOOTER YEAR
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".featured-project, " +
    ".project-card, " +
    ".tool-card, " +
    ".timeline-item, " +
    ".workflow-step, " +
    ".highlight-card, " +
    ".capability"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================================
   NAVBAR SHADOW ON SCROLL
========================================================= */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 8px 25px rgba(16,26,51,.05)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});