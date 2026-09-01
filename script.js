// ================= HEADER STICKY =================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 50);

});


// ================= MOBILE MENU =================

function toggleMenu() {

    const navbar = document.querySelector(".navbar");
    const menutoogle = document.querySelector(".menutoogle");

    navbar.classList.toggle("active");
    menutoogle.classList.toggle("active");

}


// ================= CONTACT FORM =================

function submitContact(event) {

    event.preventDefault();

    const nom = document.getElementById("contactNom").value;
    const result = document.getElementById("contactMessageResult");

    result.textContent =
        "Merci " + nom + " ! Votre message a bien été enregistré (exemple).";

    event.target.reset();

}


// ================= RESERVATION =================

function submitReservation(event) {

    event.preventDefault();

    const nom = document.getElementById("nomReservation").value;
    const result = document.getElementById("reservationMessage");

    result.textContent =
        "Merci " + nom + " ! Votre réservation a bien été enregistrée (exemple).";

    event.target.reset();

}
