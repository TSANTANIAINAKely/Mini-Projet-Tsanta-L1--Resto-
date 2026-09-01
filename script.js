// ================= HEADER STICKY =================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    header.classList.toggle(
        "sticky",
        window.scrollY > 0
    );

});


// ================= MENU MOBILE =================

function toggleMenu() {

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("active");

}


// ================= RÉSERVATION =================

function makeReservation(event) {

    event.preventDefault();

    const confirmation = document.getElementById("confirmation");

    confirmation.classList.add("active");

    // Réinitialiser le formulaire
    event.target.reset();

}


// ================= FERMER LA CONFIRMATION =================

function closeConfirmation() {

    const confirmation = document.getElementById("confirmation");

    confirmation.classList.remove("active");

}


// ================= CONTACT =================

function sendMessage(event) {

    event.preventDefault();

    alert("Votre message a bien été envoyé. Merci pour votre contact !");

    event.target.reset();

}
