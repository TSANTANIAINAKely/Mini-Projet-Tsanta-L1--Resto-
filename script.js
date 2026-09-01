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

const reservationForm =
    document.getElementById("reservationForm");

const successMessage =
    document.getElementById("successMessage");


reservationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    successMessage.classList.add("show");

    reservationForm.reset();

});


// ================= FERMER MESSAGE =================

function closeSuccessMessage() {

    successMessage.classList.remove("show");

}


// ================= FERMER EN CLIQUANT A COTE =================

successMessage.addEventListener("click", function (event) {

    if (event.target === successMessage) {

        closeSuccessMessage();

    }

});
