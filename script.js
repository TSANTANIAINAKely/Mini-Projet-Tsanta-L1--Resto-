// HEADER STICKY
window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    header.classList.toggle(
        "sticky",
        window.scrollY > 0
    );

});


// MENU MOBILE
function toggleMenu(){

    const menutoogle =
        document.querySelector(".menutoogle");

    const navbar =
        document.querySelector(".navbar");

    menutoogle.classList.toggle("active");

    navbar.classList.toggle("active");

}


// ENVOI DU MESSAGE CONTACT
function sendMessage(){

    alert("Votre message a bien été envoyé !");

}


// RESERVATION
function reserver(){

    const nom =
        document.getElementById("nom").value.trim();

    const date =
        document.getElementById("date").value;

    const heure =
        document.getElementById("heure").value;

    const plat =
        document.getElementById("plat").value;

    const personnes =
        document.getElementById("personnes").value;


    // VERIFICATION
    if(
        nom === "" ||
        date === "" ||
        heure === "" ||
        plat === "" ||
        personnes === ""
    ){

        alert(
            "Veuillez remplir tous les champs avant de confirmer."
        );

        return;
    }


    // MESSAGE DE CONFIRMATION
    const message =
        "Merci " + nom +
        " ! Votre réservation pour " +
        personnes +
        " personne(s), le " +
        date +
        " à " +
        heure +
        " pour « " +
        plat +
        " » a bien été enregistrée.";


    document.getElementById(
        "messageConfirmation"
    ).textContent = message;


    document.getElementById(
        "confirmation"
    ).style.display = "flex";

}


// FERMER LA FENETRE
function fermerConfirmation(){

    document.getElementById(
        "confirmation"
    ).style.display = "none";

}
