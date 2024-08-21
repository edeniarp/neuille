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
    const socialIcons = document.querySelector('.social-icons');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Apparition des icônes au défilement vers le bas
        if (scrollTop > lastScrollTop) {
            if (scrollTop > 300) { // Ajustez cette valeur selon le besoin
                socialIcons.classList.add('show');
            }
        } else {
            // Disparition des icônes au défilement vers le haut
            if (scrollTop < 300) {
                socialIcons.classList.remove('show');
            }
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});
