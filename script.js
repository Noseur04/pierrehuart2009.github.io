document.querySelectorAll('.project').forEach(button => {
    button.addEventListener('click', () => {
        // Ferme tous les autres boutons
        document.querySelectorAll('.project').forEach(btn => {
            if (btn !== button) {
                btn.classList.remove('open');
            }
        });

        // Ouvre ou ferme le bouton cliqué
        button.classList.toggle('open');
    });
});

document.querySelectorAll('.skill').forEach(button => {
    button.addEventListener('click', () => {
        // Ferme tous les autres boutons
        document.querySelectorAll('.skill').forEach(btn => {
            if (btn !== button) {
                btn.classList.remove('open');
            }
        });

        // Ouvre ou ferme le bouton cliqué
        button.classList.toggle('open');
    });
});