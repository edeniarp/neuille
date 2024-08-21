document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Empêche le rechargement de la page
        
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (name && email && message) {
            // Affichage d'un message de confirmation
            alert('Merci pour votre message ! Je vous répondrai bientôt.');
            
            // Réinitialisation du formulaire
            form.reset();
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    });

    // Animation de la section "Projets" au défilement
    const projectSections = document.querySelectorAll('.project');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    projectSections.forEach(section => {
        observer.observe(section);
    });
});
