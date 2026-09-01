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

    const menutoogle =
        document.querySelector(".menutoogle");

    const navbar =
        document.querySelector(".navbar");

    menutoogle.classList.toggle("active");

    navbar.classList.toggle("active");

}


// ================= RESERVATION =================

function faireReservation() {

    const nom =
        document.getElementById("nomReservation").value.trim();

    const plat =
        document.getElementById("platReservation").value;

    const nombre =
        document.getElementById("nombrePersonnes").value;

    const date =
        document.getElementById("dateReservation").value;

    const heure =
        document.getElementById("heureReservation").value;


    if (
        nom === "" ||
        plat === "" ||
        nombre === "" ||
        date === "" ||
        heure === ""
    ) {

        alert(
            "Veuillez remplir tous les champs obligatoires."
        );

        return;
    }


    const popup =
        document.getElementById("popup");

    popup.classList.add("active");


    // Réinitialisation du formulaire

    document.getElementById("nomReservation").value = "";

    document.getElementById("platReservation").value = "";

    document.getElementById("nombrePersonnes").value = "";

    document.getElementById("dateReservation").value = "";

    document.getElementById("heureReservation").value = "";

    document.getElementById("messageReservation").value = "";

}


// ================= FERMER POPUP =================

function fermerPopup() {

    const popup =
        document.getElementById("popup");

    popup.classList.remove("active");

}


// Fermer le popup en cliquant à l'extérieur

document.addEventListener("click", function (event) {

    const popup =
        document.getElementById("popup");

    if (event.target === popup) {

        popup.classList.remove("active");

    }

});
