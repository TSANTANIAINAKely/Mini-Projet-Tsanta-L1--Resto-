// ================= HEADER STICKY =================

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    header.classList.toggle(
        "sticky",
        window.scrollY > 0
    );

});


// ================= MENU MOBILE =================

function toggleMenu(){

    const menutoogle =
        document.querySelector(".menutoogle");

    const navbar =
        document.querySelector(".navbar");

    menutoogle.classList.toggle("active");

    navbar.classList.toggle("active");

}


// ================= RESERVATION =================

function faireReservation(){

    const nom =
        document.getElementById("nomReservation").value.trim();

    const nombre =
        document.getElementById("nombrePersonnes").value;

    const plat =
        document.getElementById("platReservation").value;

    const date =
        document.getElementById("dateReservation").value;


    if(
        nom === "" ||
        nombre === "" ||
        plat === "" ||
        date === ""
    ){

        alert(
            "Veuillez remplir les informations nécessaires avant de réserver."
        );

        return;
    }


    if(Number(nombre) < 1){

        alert(
            "Le nombre de personnes doit être supérieur à 0."
        );

        return;
    }


    // Afficher la fenêtre de confirmation

    document
        .getElementById("notification")
        .classList.add("show");

}


// ================= FERMER NOTIFICATION =================

function fermerNotification(){

    document
        .getElementById("notification")
        .classList.remove("show");

}


// ================= CONTACT =================

function sendMessage(){

    alert(
        "Votre message a bien été envoyé. Merci pour votre contact !"
    );

}


// ================= FERMETURE NOTIFICATION EN CLIQUANT DEHORS =================

document.addEventListener("click", function(event){

    const notification =
        document.getElementById("notification");

    if(
        event.target === notification
    ){

        fermerNotification();

    }

});
