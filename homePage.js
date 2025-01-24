document.addEventListener('DOMContentLoaded', function () {
    const rows = document.querySelectorAll('.row');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1 }
    );

    rows.forEach((row) => {
        observer.observe(row);
    });
});