// ================= HEADER STICKY =================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 0);

});


// ================= MENU MOBILE =================

function toggleMenu() {

    const menutoogle = document.querySelector(".menutoogle");
    const navbar = document.querySelector(".navbar");

    menutoogle.classList.toggle("active");
    navbar.classList.toggle("active");

}


// ================= RESERVATION =================

function faireReservation() {

    const nom = document.getElementById("nomReservation").value.trim();

    const nombre = document.getElementById("nombrePersonnes").value;

    const plat = document.getElementById("platReservation").value;

    const message = document.getElementById("messageReservation").value.trim();

    // Vérification des champs obligatoires

    if (nom === "") {

        alert("Veuillez entrer votre nom.");

        return;

    }

    if (nombre === "" || nombre < 1) {

        alert("Veuillez entrer un nombre de personnes valide.");

        return;

    }

    if (plat === "") {

        alert("Veuillez choisir un plat.");

        return;

    }


    // Message de confirmation

    const popup = document.getElementById("popup");

    const popupMessage = document.getElementById("popupMessage");

    popupMessage.innerHTML =
        "Merci <strong>" + nom + "</strong> !<br><br>" +
        "Votre réservation pour <strong>" + nombre +
        " personne(s)</strong> avec le plat <strong>" +
        plat + "</strong> a été enregistrée.";

    popup.style.display = "flex";


    // Effacer le formulaire

    document.getElementById("nomReservation").value = "";

    document.getElementById("nombrePersonnes").value = "";

    document.getElementById("platReservation").value = "";

    document.getElementById("messageReservation").value = "";

}


// ================= FERMER POPUP =================

function fermerPopup() {

    document.getElementById("popup").style.display = "none";

}


// Fermer la popup si on clique en dehors

window.addEventListener("click", function (event) {

    const popup = document.getElementById("popup");

    if (event.target === popup) {

        popup.style.display = "none";

    }

});


// ================= CONTACT =================

function envoyerMessage() {

    alert(
        "Votre message a bien été pris en compte. Merci de nous avoir contactés !"
    );

}
