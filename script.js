document.addEventListener("DOMContentLoaded", function () {
    // Fonction pour afficher les détails
    window.toggleDetails = function () {
        const details = document.getElementById("details");
        if (details.style.display === "none") {
            details.style.display = "block";
            details.style.animation = "fadeIn 1s ease";
        } else {
            details.style.display = "none";
        }
    };

    // Fonction pour les animations de défilement
    const sections = document.querySelectorAll("section");

    const options = {
        root: null,
        threshold: 0.25,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

