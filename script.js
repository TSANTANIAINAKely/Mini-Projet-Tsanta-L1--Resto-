/* =========================
   HEADER STICKY
========================= */

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});


/* =========================
   MENU MOBILE
========================= */

function toggleMenu() {

    const menuToggle = document.querySelector(".menutoogle");
    const navbar = document.querySelector(".navbar");

    menuToggle.classList.toggle("active");
    navbar.classList.toggle("active");

}


/* =========================
   FERMER MENU APRÈS CLIC
========================= */

document.querySelectorAll(".navbar a").forEach(function (link) {

    link.addEventListener("click", function () {

        const menuToggle = document.querySelector(".menutoogle");
        const navbar = document.querySelector(".navbar");

        menuToggle.classList.remove("active");
        navbar.classList.remove("active");

    });

});


/* =========================
   RESERVATION
========================= */

const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {

    reservationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nom =
            document.querySelector('[name="nom"]').value;

        const date =
            document.querySelector('[name="date"]').value;

        const heure =
            document.querySelector('[name="heure"]').value;

        const personnes =
            document.querySelector('[name="personnes"]').value;

        const plat =
            document.querySelector('[name="plat"]').value;

        const popupMessage =
            document.getElementById("popupMessage");

        popupMessage.innerHTML =
            "Merci <strong>" + nom + "</strong> !<br><br>" +
            "Votre réservation a été enregistrée " +
            "dans cette démonstration.<br><br>" +
            "🍽️ Plat : <strong>" + plat + "</strong><br>" +
            "👥 Personnes : <strong>" + personnes + "</strong><br>" +
            "📅 Date : <strong>" + date + "</strong><br>" +
            "⏰ Heure : <strong>" + heure + "</strong>";

        document
            .getElementById("reservationPopup")
            .classList.add("active");

        reservationForm.reset();

    });

}


/* =========================
   FERMER POPUP
========================= */

function closeReservationPopup() {

    document
        .getElementById("reservationPopup")
        .classList.remove("active");

}


/* =========================
   FERMER POPUP EN CLIQUANT
   EN DEHORS
========================= */

const reservationPopup =
    document.getElementById("reservationPopup");

if (reservationPopup) {

    reservationPopup.addEventListener("click", function (event) {

        if (event.target === reservationPopup) {

            closeReservationPopup();

        }

    });

}


/* =========================
   CONTACT DEMO
========================= */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Merci ! Votre message a bien été envoyé dans cette démonstration.");

        contactForm.reset();

    });

}
