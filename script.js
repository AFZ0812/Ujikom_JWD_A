document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('click', function() {
            // Toggle 'active' class on the clicked team member
            this.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Menangani klik pada item produk
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        item.addEventListener('click', function() {
            // Menghapus kelas 'active' dari item lain
            productItems.forEach(i => {
                if (i !== item) i.classList.remove('active');
            });
            // Menambahkan atau menghapus kelas 'active' pada item yang diklik
            item.classList.toggle('active');
        });
    });

    // Menangani klik pada item jasa
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            // Menghapus kelas 'active' dari item lain
            serviceItems.forEach(i => {
                if (i !== item) i.classList.remove('active');
            });
            // Menambahkan atau menghapus kelas 'active' pada item yang diklik
            item.classList.toggle('active');
        });
    });
});
