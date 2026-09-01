/* =========================
   HEADER STICKY
========================= */

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    header.classList.toggle(
        "sticky",
        window.scrollY > 0
    );

});


/* =========================
   MENU MOBILE
========================= */

function toggleMenu() {

    const menutoogle = document.querySelector(".menutoogle");
    const navbar = document.querySelector(".navbar");

    menutoogle.classList.toggle("active");
    navbar.classList.toggle("active");

}


/* =========================
   RESERVATION
========================= */

function faireReservation() {

    const nom = document.getElementById("nomReservation").value.trim();
    const telephone = document.getElementById("telephoneReservation").value.trim();
    const date = document.getElementById("dateReservation").value;
    const heure = document.getElementById("heureReservation").value;
    const personnes = document.getElementById("personnesReservation").value;

    /*
       Vérification simple des champs
    */

    if (
        nom === "" ||
        telephone === "" ||
        date === "" ||
        heure === "" ||
        personnes === ""
    ) {

        alert("Veuillez remplir tous les champs de réservation.");

        return;
    }


    /*
       Affichage de la fenêtre de confirmation
    */

    const popup = document.getElementById("popup");

    popup.classList.add("active");


    /*
       Effacer les champs après réservation
    */

    document.getElementById("nomReservation").value = "";
    document.getElementById("telephoneReservation").value = "";
    document.getElementById("dateReservation").value = "";
    document.getElementById("heureReservation").value = "";
    document.getElementById("personnesReservation").value = "";

}


/* =========================
   FERMER POPUP
========================= */

function fermerPopup() {

    const popup = document.getElementById("popup");

    popup.classList.remove("active");

}


/* =========================
   FERMER LE POPUP EN CLIQUANT
   À L'EXTÉRIEUR
========================= */

window.addEventListener("click", function (event) {

    const popup = document.getElementById("popup");

    if (event.target === popup) {

        popup.classList.remove("active");

    }

});
