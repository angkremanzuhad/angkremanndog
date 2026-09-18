// Mengubah bayangan header saat halaman di-scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        // Menambahkan bayangan yang lebih tebal saat di-scroll
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
        // Kembali ke bayangan awal saat di posisi paling atas
        header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
    }
});
