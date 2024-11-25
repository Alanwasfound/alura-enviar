document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('click', function() {
            alert('Você clicou no capítulo: ' + this.querySelector('h2').textContent);
        });
    });
});
