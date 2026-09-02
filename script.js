```javascript
function toggleMenu() {
    const navbar = document.querySelector(".navbar");

    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
    }
}


/* ================= STICKY HEADER ================= */

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});


/* ================= RESERVATION ================= */

const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {

    reservationForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Votre réservation a été envoyée avec succès !");

        reservationForm.reset();

    });

}


/* ================= CONTACT ================= */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Votre message a été envoyé avec succès !");

        contactForm.reset();

    });

}

