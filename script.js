// ================= HEADER STICKY =================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 0);

});


// ================= MENU MOBILE =================

function toggleMenu() {

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("active");

}


// ================= POPUP =================

function showPopup(title, message) {

    const popup = document.getElementById("popup");

    document.getElementById("popup-title").textContent = title;

    document.getElementById("popup-message").textContent = message;

    popup.classList.add("show");

}


function closePopup() {

    const popup = document.getElementById("popup");

    popup.classList.remove("show");

}


// ================= RESERVATION =================

function makeReservation(event) {

    event.preventDefault();

    showPopup(
        "Réservation réussie !",
        "Votre demande de réservation a bien été enregistrée. Ceci est une démonstration."
    );

    event.target.reset();

}


// ================= CONTACT =================

function sendMessage(event) {

    event.preventDefault();

    showPopup(
        "Message envoyé !",
        "Votre message a bien été enregistré. Ceci est une démonstration."
    );

    event.target.reset();

}


// ================= FERMER POPUP =================

document.getElementById("popup").addEventListener("click", function (event) {

    if (event.target === this) {
        closePopup();
    }

});
