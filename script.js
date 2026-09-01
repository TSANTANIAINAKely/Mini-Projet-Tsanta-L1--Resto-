/* ================= HEADER STICKY ================= */

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    header.classList.toggle(
        "sticky",
        window.scrollY > 0
    );

});


/* ================= MENU MOBILE ================= */

function toggleMenu() {

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("active");

}


/* ================= RESERVATION ================= */

function faireReservation(event) {

    event.preventDefault();

    alert(
        "✅ Réservation enregistrée !\n\n" +
        "Merci pour votre réservation.\n" +
        "Nous vous souhaitons un agréable moment chez Resto-Snack."
    );

}
