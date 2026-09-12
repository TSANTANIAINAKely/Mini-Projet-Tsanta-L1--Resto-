document.addEventListener("DOMContentLoaded", function () {

    /* ================= RESERVATION ================= */

    const reservationForm = document.getElementById("reservationForm");
    const reservationModal = document.getElementById("reservationModal");
    const closeReservation = document.getElementById("closeReservation");
    const reservationOk = document.getElementById("reservationOk");

    const reservationSummary =
        document.getElementById("reservationSummary");

    const reservationThanks =
        document.getElementById("reservationThanks");


    reservationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nom = document.getElementById("nom").value;
        const telephone = document.getElementById("telephone").value;
        const date = document.getElementById("date").value;
        const heure = document.getElementById("heure").value;
        const personnes = document.getElementById("personnes").value;
        const plat = document.getElementById("plat").value;
        const message = document.getElementById("reservationMessage").value;


        reservationThanks.textContent = "Merci " + nom + " !";


        reservationSummary.innerHTML = `
            <p><strong>👤 Nom :</strong> ${nom}</p>
            <p><strong>📞 Téléphone :</strong> ${telephone}</p>
            <p><strong>🍽️ Plat :</strong> ${plat}</p>
            <p><strong>👥 Personnes :</strong> ${personnes}</p>
            <p><strong>📅 Date :</strong> ${date}</p>
            <p><strong>🕐 Heure :</strong> ${heure}</p>
            ${message ? `<p><strong>💬 Message :</strong> ${message}</p>` : ""}
        `;


        reservationModal.classList.add("active");

        document.body.style.overflow = "hidden";
    });


    function closeReservationModal() {
        reservationModal.classList.remove("active");
        document.body.style.overflow = "";
    }


    closeReservation.addEventListener(
        "click",
        closeReservationModal
    );


    reservationOk.addEventListener(
        "click",
        closeReservationModal
    );


    /* ================= CONTACT ================= */

    const contactForm = document.getElementById("contactForm");
    const messageModal = document.getElementById("messageModal");

    const closeMessage = document.getElementById("closeMessage");
    const messageOk = document.getElementById("messageOk");


    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        messageModal.classList.add("active");

        document.body.style.overflow = "hidden";

        contactForm.reset();
    });


    function closeMessageModal() {
        messageModal.classList.remove("active");
        document.body.style.overflow = "";
    }


    closeMessage.addEventListener(
        "click",
        closeMessageModal
    );


    messageOk.addEventListener(
        "click",
        closeMessageModal
    );


    /* ================= FERMER EN CLIQUANT À L'EXTÉRIEUR ================= */

    reservationModal.addEventListener("click", function (event) {

        if (event.target === reservationModal) {
            closeReservationModal();
        }

    });


    messageModal.addEventListener("click", function (event) {

        if (event.target === messageModal) {
            closeMessageModal();
        }

    });


    /* ================= NAVIGATION ================= */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});
