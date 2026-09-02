/* ================= HEADER ================= */

window.addEventListener("scroll", function () {

```
const header = document.querySelector("header");

if (window.scrollY > 0) {

    header.classList.add("sticky");

} else {

    header.classList.remove("sticky");

}
```

});

/* ================= MOBILE MENU ================= */

function toggleMenu() {

```
const navbar = document.querySelector(".navbar");

navbar.classList.toggle("active");
```

}

document.querySelectorAll(".navbar a").forEach(function (link) {

```
link.addEventListener("click", function () {

    document
        .querySelector(".navbar")
        .classList.remove("active");

});
```

});

/* ================= RESERVATION ================= */

const reservationForm =
document.getElementById("reservationForm");

reservationForm.addEventListener("submit", function (event) {

```
event.preventDefault();


const nom =
    document.getElementById("nom").value;

const date =
    document.getElementById("date").value;

const heure =
    document.getElementById("heure").value;

const personnes =
    document.getElementById("personnes").value;

const plat =
    document.getElementById("plat").value;


const reservationDetails =
    document.getElementById("reservationDetails");


reservationDetails.innerHTML =

    `
    Merci <strong>${nom}</strong> !<br><br>

    Votre réservation a bien été enregistrée.<br><br>

    <strong>Plat :</strong>
    ${plat}
    <br>

    <strong>Nombre de personnes :</strong>
    ${personnes}
    <br>

    <strong>Date :</strong>
    ${date}
    <br>

    <strong>Heure :</strong>
    ${heure}
    `;


document
    .getElementById("reservationPopup")
    .classList.add("show");


reservationForm.reset();
```

});

function closeReservationPopup() {

```
document
    .getElementById("reservationPopup")
    .classList.remove("show");
```

}

/* ================= CONTACT ================= */

const contactForm =
document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

```
event.preventDefault();


document
    .getElementById("contactPopup")
    .classList.add("show");


contactForm.reset();
```

});

function closeContactPopup() {

```
document
    .getElementById("contactPopup")
    .classList.remove("show");
```

}

/* ================= CLOSE POPUP ================= */

window.addEventListener("click", function (event) {

```
const reservationPopup =
    document.getElementById("reservationPopup");

const contactPopup =
    document.getElementById("contactPopup");


if (event.target === reservationPopup) {

    reservationPopup.classList.remove("show");

}


if (event.target === contactPopup) {

    contactPopup.classList.remove("show");

}
```

});
