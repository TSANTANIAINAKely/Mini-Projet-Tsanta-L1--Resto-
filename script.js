/* ================= MENU MOBILE ================= */

function toggleMenu() {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        navbar.classList.toggle("active");
    }
}


/* ================= FERMER LE MENU APRÈS UN CLIC ================= */

document.querySelectorAll(".navbar a").forEach(function(link) {

    link.addEventListener("click", function() {

        const navbar = document.querySelector(".navbar");

        if (navbar) {
            navbar.classList.remove("active");
        }

    });

});


/* ================= POPUP ================= */

function openPopup(id) {

    const popup = document.getElementById(id);

    if (popup) {
        popup.classList.add("active");
    }

}


function closePopup(id) {

    const popup = document.getElementById(id);

    if (popup) {
        popup.classList.remove("active");
    }

}


/* ================= CONTACT ================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const nom = document.getElementById("contactNom").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        if (nom === "" || email === "" || message === "") {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        openPopup("messagePopup");

        contactForm.reset();

    });

}


/* ================= RESERVATION ================= */

const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {

    reservationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const nom = document.getElementById("nom").value.trim();
        const telephone = document.getElementById("telephone").value.trim();
        const date = document.getElementById("date").value;
        const heure = document.getElementById("heure").value;
        const personnes = document.getElementById("personnes").value;
        const plat = document.getElementById("plat").value;
        const message = document.getElementById("reservationMessage").value.trim();

        if (
            nom === "" ||
            telephone === "" ||
            date === "" ||
            heure === "" ||
            personnes === "" ||
            plat === ""
        ) {

            alert("Veuillez remplir les champs obligatoires.");

            return;
        }


        /* Affichage de la réservation dans le popup */

        const details = document.getElementById("reservationDetails");

        if (details) {

            details.innerHTML = `
                <strong>Nom :</strong> ${nom}<br>
                <strong>Téléphone :</strong> ${telephone}<br>
                <strong>Plat :</strong> ${plat}<br>
                <strong>Nombre de personnes :</strong> ${personnes}<br>
                <strong>Date :</strong> ${date}<br>
                <strong>Heure :</strong> ${heure}
                ${
                    message
                    ? `<br><strong>Message :</strong> ${message}`
                    : ""
                }
            `;

        }


        openPopup("reservationPopup");

        reservationForm.reset();

    });

}


/* ================= FERMER POPUP EN CLIQUANT À CÔTÉ ================= */

document.querySelectorAll(".popup").forEach(function(popup) {

    popup.addEventListener("click", function(event) {

        if (event.target === popup) {
            popup.classList.remove("active");
        }

    });

});


/* ================= TOUCHE ESC ================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        document.querySelectorAll(".popup.active").forEach(function(popup) {
            popup.classList.remove("active");
        });

    }

});
