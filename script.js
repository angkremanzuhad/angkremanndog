document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contoh sederhana untuk kontak form (perlu backend untuk berfungsi penuh)
// document.querySelector('.contact-form form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
//     this.reset(); // Mengosongkan form setelah submit
// });