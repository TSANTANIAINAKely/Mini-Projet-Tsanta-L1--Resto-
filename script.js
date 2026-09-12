// ===============================
// MENU MOBILE
// ===============================

function toggleMenu() {

    const menu = document.querySelector(".navbar");

    if (menu) {
        menu.classList.toggle("active");
    }

}


// ===============================
// POPUP RESERVATION
// ===============================

const reservationForm =
    document.getElementById("reservationForm");

const reservationPopup =
    document.getElementById("reservationPopup");

const reservationConfirmation =
    document.getElementById("reservationConfirmation");


if (reservationForm) {

    reservationForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const nom =
            document.getElementById("reservationNom").value;

        const date =
            document.getElementById("reservationDate").value;

        const heure =
            document.getElementById("reservationHeure").value;

        const personnes =
            document.getElementById("nombrePersonnes").value;

        const plat =
            document.getElementById("platReservation").value;


        reservationConfirmation.innerHTML =

            "Merci <strong>" + nom + "</strong> !<br><br>" +

            "Votre réservation a bien été enregistrée.<br><br>" +

            "<strong>Plat :</strong> " + plat + "<br>" +

            "<strong>Personnes :</strong> " + personnes + "<br>" +

            "<strong>Date :</strong> " + date + "<br>" +

            "<strong>Heure :</strong> " + heure;


        reservationPopup.classList.add("active");


        reservationForm.reset();

    });

}


// ===============================
// FERMER RESERVATION
// ===============================

function fermerReservation() {

    reservationPopup.classList.remove("active");

}


// ===============================
// POPUP MESSAGE
// ===============================

const contactForm =
    document.getElementById("contactForm");

const messagePopup =
    document.getElementById("messagePopup");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        messagePopup.classList.add("active");

        contactForm.reset();

    });

}


// ===============================
// FERMER MESSAGE
// ===============================

function fermerMessage() {

    messagePopup.classList.remove("active");

}


// ===============================
// FERMER POPUP EN CLIQUANT DEHORS
// ===============================

window.addEventListener("click", function(event) {

    if (event.target === reservationPopup) {

        reservationPopup.classList.remove("active");

    }


    if (event.target === messagePopup) {

        messagePopup.classList.remove("active");

    }

});
