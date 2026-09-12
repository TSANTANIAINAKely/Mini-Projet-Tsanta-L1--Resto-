// ================= RESERVATION =================

const reservationForm = document.getElementById("reservationForm");
const reservationPopup = document.getElementById("reservationPopup");
const reservationDetails = document.getElementById("reservationDetails");

reservationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const date = document.getElementById("date").value;
    const heure = document.getElementById("heure").value;
    const personnes = document.getElementById("personnes").value;
    const plat = document.getElementById("plat").value;

    reservationDetails.innerHTML =
        "Merci <strong>" + nom + "</strong> !<br><br>" +
        "Votre réservation a bien été enregistrée.<br><br>" +
        "<strong>Plat :</strong> " + plat + "<br>" +
        "<strong>Nombre :</strong> " + personnes + "<br>" +
        "<strong>Date :</strong> " + date + "<br>" +
        "<strong>Heure :</strong> " + heure;

    reservationPopup.classList.add("show");

    reservationForm.reset();
});


function closeReservationPopup() {

    reservationPopup.classList.remove("show");

}


// ================= CONTACT =================

const contactForm = document.getElementById("contactForm");
const contactPopup = document.getElementById("contactPopup");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    contactPopup.classList.add("show");

    contactForm.reset();

});


function closeContactPopup() {

    contactPopup.classList.remove("show");

}


// ================= FERMER POPUP =================

window.addEventListener("click", function(event) {

    if (event.target === reservationPopup) {
        reservationPopup.classList.remove("show");
    }

    if (event.target === contactPopup) {
        contactPopup.classList.remove("show");
    }

});
