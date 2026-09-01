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


// ================= RESERVATION =================

const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {

    reservationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nom = document.getElementById("nom").value;
        const date = document.getElementById("date").value;
        const heure = document.getElementById("heure").value;
        const personnes = document.getElementById("personnes").value;

        showPopup(
            "Réservation réussie !",
            "Merci " + nom +
            " ! Votre demande de réservation pour " +
            personnes +
            " personne(s), le " +
            date +
            " à " +
            heure +
            " a bien été enregistrée."
        );

        reservationForm.reset();

    });

}


// ================= POPUP =================

function showPopup(titre, message) {

    const oldPopup = document.querySelector(".popup");

    if (oldPopup) {
        oldPopup.remove();
    }

    const popup = document.createElement("div");

    popup.className = "popup";

    popup.innerHTML = `
        <h3>${titre}</h3>
        <p>${message}</p>
        <button onclick="this.parentElement.remove()">
            Fermer
        </button>
    `;

    document.body.appendChild(popup);


    setTimeout(function () {

        if (popup) {
            popup.remove();
        }

    }, 6000);

}
